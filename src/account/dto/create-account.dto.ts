import { ApiProperty } from '@nestjs/swagger';
import { $Enums, AccType, Prisma } from '@prisma/client';

export class CreateAccountDTO implements Prisma.AccountCreateInput {
  user: Prisma.UserCreateNestedOneWithoutAccountsInput;
  @ApiProperty({
    enum: AccType,
    enumName: 'AccType',
    example: 'John Doe',
  })
  type: AccType;
  @ApiProperty({
    example: 1000,
  })
  balance: number;
  @ApiProperty({
    example: 1,
  })
  userId: number;
}
