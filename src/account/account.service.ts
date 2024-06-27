import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Account, Prisma } from '@prisma/client';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createAccount(data: Prisma.AccountCreateInput): Promise<Account> {
    return this.prisma.account.create({ data });
  }

  async getAccounts(): Promise<Account[]> {
    return this.prisma.account.findMany({
      include: {
        _count: {
          select: {
            fromTrans: true,
            toTrans: true,
          }
        }
      }
    });
  }

  async getAccountById(id: number): Promise<Account> {
    return this.prisma.account.findUnique({ where: { id } });
  }

  async getAccountsByUserId(userId: number): Promise<Account[]> {
    return this.prisma.account.findMany({ where: { userId } });
  }
}
