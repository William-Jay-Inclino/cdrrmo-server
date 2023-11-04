import { Module } from '@nestjs/common';
import { TrainingSkillService } from './training_skill.service';
import { TrainingSkillController } from './training_skill.controller';

@Module({
  controllers: [TrainingSkillController],
  providers: [TrainingSkillService],
})
export class TrainingSkillModule {}
