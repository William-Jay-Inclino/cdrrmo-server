import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { SharedController } from './shared.controller';

@Module({
  providers: [SharedService],
  controllers: [SharedController],
  exports: [SharedService],
})
export class SharedModule {}
