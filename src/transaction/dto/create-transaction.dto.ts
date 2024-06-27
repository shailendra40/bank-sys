// src/transaction/dto/create-transaction.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsString, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({ example: '2024-05-28T14:28:23.382Z', description: 'The date of the transaction' })
  @IsDateString()
  date: string;

  @ApiProperty({ example: 'Grocery shopping', description: 'A description of the transaction' })
  @IsString()
  description: string;

  @ApiProperty({ example: 100.50, description: 'The amount of the transaction' })
  @IsNumber()
  amount: number;

  @ApiProperty({ example: 1, description: 'The ID of the account the money is sent from' })
  @IsInt()
  fromId: number;

  @ApiProperty({ example: 2, description: 'The ID of the account the money is sent to' })
  @IsInt()
  toId: number;

  @ApiProperty({ example: 'Bought groceries for the week', description: 'Additional remarks about the transaction' })
  @IsString()
  remarks: string;
}
