import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { Account as AccountModel } from '@prisma/client';
import { CreateAccountDTO } from './dto/create-account.dto';

@ApiTags('accounts')
@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  @ApiOperation({ summary: 'Create account' })
  @ApiResponse({ status: 201, description: 'The account has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createUser(@Body() userData: CreateAccountDTO): Promise<AccountModel> {
    const createAccountInput = {
      balance: userData.balance,
      user: {
        connect: { id: userData.userId },
      },
    };
    return this.accountService.createAccount(createAccountInput);
  }

  @Get()
  @ApiOperation({ summary: 'Get all accounts' })
  async getAccounts(): Promise<AccountModel[]> {
    return this.accountService.getAccounts();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get account by ID' })
  async getAccountById(@Param('id') id: string): Promise<AccountModel> {
    return this.accountService.getAccountById(Number(id));
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get accounts by user ID' })
  async getAccountsByUserId(@Param('userId') userId: string): Promise<AccountModel[]> {
    return this.accountService.getAccountsByUserId(Number(userId));
  }
}
