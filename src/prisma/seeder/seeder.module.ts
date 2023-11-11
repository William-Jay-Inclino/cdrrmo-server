import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';

@Module({
  providers: [SeederService],
  controllers: [SeederController],
  exports: [SeederService],
})
export class SeederModule {}
