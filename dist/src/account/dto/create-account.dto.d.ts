import { AccType, Prisma } from '@prisma/client';
export declare class CreateAccountDTO implements Prisma.AccountCreateInput {
    user: Prisma.UserCreateNestedOneWithoutAccountsInput;
    type: AccType;
    balance: number;
    userId: number;
}
