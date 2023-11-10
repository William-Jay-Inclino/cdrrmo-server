import { Module } from '@nestjs/common';
import { PoService } from './po.service';
import { PoController } from './po.controller';

@Module({
  controllers: [PoController],
  providers: [PoService],
})
export class PoModule {}
