import { PrismaService } from '../prisma/prisma.service';
import { Account, Prisma } from '@prisma/client';
export declare class AccountService {
    private prisma;
    constructor(prisma: PrismaService);
    createAccount(data: Prisma.AccountCreateInput): Promise<Account>;
    getAccounts(): Promise<Account[]>;
    getAccountById(id: number): Promise<Account>;
    getAccountsByUserId(userId: number): Promise<Account[]>;
}
