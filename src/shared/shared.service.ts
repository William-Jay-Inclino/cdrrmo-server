import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SharedService {

    constructor(private readonly prisma: PrismaService) {}


    /**
   * Seed data into the database.
   */
    async seedData(){
        console.log('Seeding data...')
        this.seedTrainingSkills()
    }

    /**
   * Seed training skills into the database.
   */
    async seedTrainingSkills(){
        console.log('Seeding training skills...')
    }

}
