// src/transaction/transaction.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from '@prisma/client';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async createTransaction(data: CreateTransactionDto): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: {
        date: new Date(data.date),
        description: data.description,
        amount: data.amount,
        from: { connect: { id: data.fromId } },
        to: { connect: { id: data.toId } },
        remarks: data.remarks,
      },
    });
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany();
  }

  async getTransactionById(id: number): Promise<Transaction> {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  async updateTransaction(id: number, data: UpdateTransactionDto): Promise<Transaction> {
    return this.prisma.transaction.update({
      where: { id },
      data: {
        date: data.date ? new Date(data.date) : undefined,
        description: data.description,
        amount: data.amount,
        from: data.fromId ? { connect: { id: data.fromId } } : undefined,
        to: data.toId ? { connect: { id: data.toId } } : undefined,
        remarks: data.remarks,
      },
    });
  }

  async deleteTransaction(id: number): Promise<Transaction> {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
