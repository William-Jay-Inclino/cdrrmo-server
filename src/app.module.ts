import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingSkillModule } from './training_skill/training_skill.module';

@Module({
  imports: [TrainingSkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
