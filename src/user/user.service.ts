// user.service.ts
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma, Account, Transaction } from '@prisma/client';
import { FundTransferDTO } from './dto/fund-transfer.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        username: data.username,
        dob: new Date(data.dob),
        address: data.address,
      },
    });
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        _count: {
          select: { accounts: true, files: true },
        },
      },
    });
  }

  async getUserAccounts(id) {
    const user = await this.prisma.account.findMany({
      where: {
        userId: id,
      },
    });

    return user;
  }

  async getUserAccountById(userId, accountId) {
    const user = await this.prisma.account.findFirst({
      where: {
        id: accountId,
        userId: userId,
      },
    });

    return user;
  }
  async getUserAccountTransaction(userId, accountId) {
    const transactions = await this.prisma.transaction.findMany({
      where: {
        OR: [
          {
            from: {
              id: accountId,
              userId: userId,
            },
          },
          {
            to: {
              id: accountId,
              userId: userId,
            },
          },
        ],
      },
    });

    const totalSent = transactions.reduce((acc, curr) => {
      if (curr.fromId === accountId) {
        return acc + curr.amount;
      }
      return acc;
    }, 0);

    const totalReceived = transactions.reduce((acc, curr) => {
      if (curr.toId === accountId) {
        return acc + curr.amount;
      }
      return acc;
    }, 0);

    return {
      totalSent,
      totalReceived,
      transactions,
    };
  }

  async getUserTransactions(userId) {
    const transactions = await this.prisma.transaction.findMany({
      where: {
        OR: [
          {
            from: {
              userId: userId,
            },
          },
          {
            to: {
              userId: userId,
            },
          },
        ],
      },
    });

    return transactions;
  }

  async transferFunds(transferDto: FundTransferDTO) {
    // Check If sending account exist or not
    const senderExist = await this.prisma.account.findFirst({
      where: {
        id: transferDto.sender,
      },
    });
    if (!senderExist) {
      throw new NotFoundException('Sender A/C not found.');
    }
    // Check If receiving account exist or not
    const receiverExist = await this.prisma.account.findFirst({
      where: {
        id: transferDto.receiver,
      },
    });
    if (!receiverExist) {
      throw new NotFoundException('Receiver A/C not found.');
    }

    // Check if the Sender has sufficient fund to transfer
    if (senderExist.balance < transferDto.fund) {
      throw new BadRequestException('Insufficient fund.');
    }

    // Transfer the fund to the receiver
    // Subtract the amount from sender's account
    try {
      await this.prisma.$transaction([
        this.prisma.account.update({
          where: {
            id: transferDto.sender,
          },
          data: {
            balance: senderExist.balance - transferDto.fund,
          },
        }),

        // Add the amount to receiver's account
        this.prisma.account.update({
          where: {
            id: transferDto.receiver,
          },
          data: {
            balance: receiverExist.balance + transferDto.fund,
          },
        }),

        // Add the transaction to transaction table
        this.prisma.transaction.create({
          data: {
            amount: transferDto.fund,
            date: new Date(),
            description: transferDto.description,
            remarks: transferDto.remarks,
            fromId: transferDto.sender,
            toId: transferDto.receiver,
          },
        }),
      ]);
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong!');
    }

    return {
      message: 'Balance trasferred successfully!',
    };
  }
}
