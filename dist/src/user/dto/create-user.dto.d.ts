import { Prisma } from '@prisma/client';
export declare class CreateUserDTO implements Prisma.UserCreateInput {
    name: string;
    email: string;
    username: string;
    dob: string;
    address: string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    files?: Prisma.FileCreateNestedManyWithoutUserInput;
}
