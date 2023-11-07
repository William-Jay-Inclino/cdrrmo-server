import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TrainingSkillModule } from './training_skill/training_skill.module';
import { EmergencyModule } from './emergency/emergency.module';
import { BartModule } from './bart/bart.module';
import { CsoModule } from './cso/cso.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule, 
    TrainingSkillModule, EmergencyModule, BartModule, CsoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
