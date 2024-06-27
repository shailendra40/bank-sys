import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { FundTransferDTO } from './dto/fund-transfer.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<{
        id: number;
        name: string;
        email: string;
        username: string;
        dob: Date;
        address: string;
    }>;
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getUserAccounts(id: any): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.AccType;
        balance: number;
        userId: number;
    }[]>;
    getUserAccountById(userId: any, accountId: any): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.AccType;
        balance: number;
        userId: number;
    }>;
    getUserAccountTransaction(userId: any, accountId: any): Promise<{
        totalSent: number;
        totalReceived: number;
        transactions: {
            id: number;
            date: Date;
            description: string;
            amount: number;
            fromId: number;
            toId: number;
            remarks: string;
        }[];
    }>;
    getUserTransactions(userId: any): Promise<{
        id: number;
        date: Date;
        description: string;
        amount: number;
        fromId: number;
        toId: number;
        remarks: string;
    }[]>;
    transferFunds(transferDto: FundTransferDTO): Promise<{
        message: string;
    }>;
}
