import { AccountService } from './account.service';
import { Account as AccountModel } from '@prisma/client';
import { CreateAccountDTO } from './dto/create-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    createUser(userData: CreateAccountDTO): Promise<AccountModel>;
    getAccounts(): Promise<AccountModel[]>;
    getAccountById(id: string): Promise<AccountModel>;
    getAccountsByUserId(userId: string): Promise<AccountModel[]>;
}
