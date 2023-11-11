import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TrainingSkillModule } from './training_skill/training_skill.module';
import { EmergencyModule } from './emergency/emergency.module';
import { BartModule } from './bart/bart.module';
import { CsoModule } from './cso/cso.module';
import { PoModule } from './po/po.module';
import { NaModule } from './na/na.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { SeederModule } from './prisma/seeder/seeder.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule, 
    TrainingSkillModule, 
    EmergencyModule, 
    BartModule, 
    CsoModule, 
    PoModule, 
    NaModule, 
    UserModule, 
    SharedModule,
    SeederModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
