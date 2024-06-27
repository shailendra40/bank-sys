import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDTO } from './dto/create-user.dto';
import { FundTransferDTO } from './dto/fund-transfer.dto';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    createUser(userData: CreateUserDTO): Promise<UserModel>;
    getUsers(): Promise<UserModel[]>;
    getUserById(id: string): Promise<UserModel>;
    getUserAccount(id: number): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.AccType;
        balance: number;
        userId: number;
    }[]>;
    getUserAccountTransaction(userId: number, accountId: number): Promise<{
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
    getUserAccountById(userId: number, accountId: number): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.AccType;
        balance: number;
        userId: number;
    }>;
    getUserTransactions(userId: number): Promise<{
        id: number;
        date: Date;
        description: string;
        amount: number;
        fromId: number;
        toId: number;
        remarks: string;
    }[]>;
    transferFund(fundTransferDto: FundTransferDTO): Promise<{
        message: string;
    }>;
}
