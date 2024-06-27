import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from '@prisma/client';
export declare class TransactionService {
    private prisma;
    constructor(prisma: PrismaService);
    createTransaction(data: CreateTransactionDto): Promise<Transaction>;
    getAllTransactions(): Promise<Transaction[]>;
    getTransactionById(id: number): Promise<Transaction>;
    updateTransaction(id: number, data: UpdateTransactionDto): Promise<Transaction>;
    deleteTransaction(id: number): Promise<Transaction>;
}
