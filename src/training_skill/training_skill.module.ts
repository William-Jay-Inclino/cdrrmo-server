import { Module } from '@nestjs/common';
import { TrainingSkillService } from './training_skill.service';
import { TrainingSkillController } from './training_skill.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TrainingSkillController],
  providers: [TrainingSkillService],
})
export class TrainingSkillModule {}
