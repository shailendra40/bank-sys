// src/transaction/transaction.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @Get()
  async findAll() {
    return this.transactionService.getAllTransactions();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.transactionService.getTransactionById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.updateTransaction(id, updateTransactionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.transactionService.deleteTransaction(id);
  }
}
