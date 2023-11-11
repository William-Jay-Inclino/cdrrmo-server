import { Module } from '@nestjs/common';
import { CsoService } from './cso.service';
import { CsoController } from './cso.controller';

@Module({
  controllers: [CsoController],
  providers: [CsoService],
})
export class CsoModule {}
