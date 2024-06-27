// prisma.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AccountModule } from '../account/account.module';

@Module({
  imports: [forwardRef(() => AccountModule)],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
