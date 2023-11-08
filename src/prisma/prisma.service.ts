import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(config: ConfigService){
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL'),
                }
            }
        })
    }

    cleanDb() {
        console.log('truncating db...')
        return this.$transaction([
          this.trainingSkill.deleteMany(),
          this.emergency.deleteMany(),
          this.bart.deleteMany(),
          this.cso.deleteMany(),
          this.po.deleteMany(),
          this.na.deleteMany(),
        ]);
    }
}
