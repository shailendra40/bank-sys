import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Logger,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Prisma, User as UserModel, Transaction } from '@prisma/client';
import { CreateUserDTO } from './dto/create-user.dto';
import { FundTransferDTO } from './dto/fund-transfer.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createUser(@Body() userData: CreateUserDTO): Promise<UserModel> {
    // console.log("=========================================>",userData.dob);
    return await this.userService.createUser(userData);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  async getUsers(): Promise<UserModel[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.getUserById(Number(id));
  }

  @Get(':id/accounts/')
  async getUserAccount(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserAccounts(id);
  }

  @Get(':userId/account/:accountId/transactions')
  async getUserAccountTransaction(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('accountId', ParseIntPipe) accountId: number,
  ) {
    return await this.userService.getUserAccountTransaction(userId, accountId);
  }

  @Get(':userId/accounts/:accountId')
  async getUserAccountById(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('accountId', ParseIntPipe) accountId: number,
  ) {
    return await this.userService.getUserAccountById(userId, accountId);
  }

  @Get('/:userId/transactions')
  async getUserTransactions(@Param('userId', ParseIntPipe) userId: number) {
    return await this.userService.getUserTransactions(userId);
  }

  @Post('/transfer')
  @UsePipes(new ValidationPipe({ transform: true }))
  async transferFund(@Body() fundTransferDto: FundTransferDTO) {
    return await this.userService.transferFunds(fundTransferDto);
  }
}
