import { Module } from '@nestjs/common';
import { NaService } from './na.service';
import { NaController } from './na.controller';

@Module({
  controllers: [NaController],
  providers: [NaService],
})
export class NaModule {}
