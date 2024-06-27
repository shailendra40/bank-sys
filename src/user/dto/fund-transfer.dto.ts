import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class FundTransferDTO {
  @IsNumber()
  @Min(1)
  @ApiProperty()
  sender: number;

  @IsNumber()
  @Min(1)
  @ApiProperty()
  receiver: number;

  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 0,
  })
  @Min(10)
  @ApiProperty()
  fund: number;

  @IsString()
  @MinLength(10)
  @ApiProperty()
  description: string;

  @IsString()
  @MinLength(5)
  @ApiProperty()
  remarks: string;
}
