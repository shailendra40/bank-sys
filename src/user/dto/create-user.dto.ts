import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateUserDTO implements Prisma.UserCreateInput {
  @ApiProperty({
    example: 'John Doe',
    type: String,
    description: 'Full name of the user',
  })
  name: string;
  @ApiProperty({
    example: 'Dhiraj123@gmail.com',
  })
  email: string;
  @ApiProperty({
    example: 'dhiraj123',
    type: String,
    description: 'Unique username for the user',
  })
  username: string;
  @ApiProperty({
    example: '2024-01-01',
    type: String,
    description: 'Date of birth in YYYY-MM-DD format',
  })
  dob: string;
  @ApiProperty({
    example: '1234, 5th Avenue, New York',
    type: String,
    description: 'Address of the user',
  })
  address: string;
  @ApiProperty({
    example: '1234567890',
    type: String,
    description: 'Contact number of the user',
  })
  accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
  @ApiProperty({
    example: '1234567890',
    type: String,
    description: 'Contact number of the user',
  })
  files?: Prisma.FileCreateNestedManyWithoutUserInput;
}
