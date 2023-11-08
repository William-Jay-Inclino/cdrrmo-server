import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as mockData from './mock-data';
import { Bart, Cso, Emergency, Na, Po, TrainingSkill } from '@prisma/client';
import { faker } from '@faker-js/faker';

@Injectable()
export class SharedService {

    constructor(private readonly prisma: PrismaService) {}


    /**
   * Seed data into the database.
   */
    async seedData(){
        console.log('Seeding data...')
        await this.seedTrainingSkillTbl()
        await this.seedEmergencyTbl()
        await this.seedBartTbl()
        await this.seedCsoTbl()
        await this.seedPoTbl()
        await this.seedNaTbl()
        await this.seedUserTbl()
        await this.seedTeamTbl()
        await this.seedTeamMemberTbl()
        await this.seedUserSkillTbl()
        await this.seedSkillCertificateTbl()
    }

    async seedTrainingSkillTbl(){
        await this.prisma.trainingSkill.deleteMany({})

        const seedData: TrainingSkill[] = []

        for(let i of mockData.trainingSkills){
            const data = {} as TrainingSkill
            data.id = faker.string.uuid()
            data.name = i
            data.description = faker.lorem.paragraph()
            data.created_at = new Date()
            data.updated_at = new Date()

            seedData.push(data)
        }

        await this.prisma.trainingSkill.createMany({
            data: seedData,
        });
      
    }

    async seedEmergencyTbl(){
        await this.prisma.emergency.deleteMany({})

        const seedData: Emergency[] = []

        for(let i of mockData.emergencies){
            const data = {} as Emergency
            data.id = faker.string.uuid()
            data.name = i
            data.description = faker.lorem.paragraph()
            data.created_at = new Date()
            data.updated_at = new Date()

            seedData.push(data)
        }

        await this.prisma.emergency.createMany({
            data: seedData,
        });
      
    }

    async seedBartTbl(){
        await this.prisma.bart.deleteMany({})

        const seedData: Bart[] = []

        for(let i of mockData.barts){
            const data = {} as Bart
            data.id = faker.string.uuid()
            data.name = i
            data.description = faker.lorem.paragraph()
            data.created_at = new Date()
            data.updated_at = new Date()

            seedData.push(data)
        }

        await this.prisma.bart.createMany({
            data: seedData,
        });
      
    }

    async seedCsoTbl(){
        await this.prisma.cso.deleteMany({})

        const seedData: Cso[] = []

        for(let i of mockData.csos){
            const data = {} as Cso
            data.id = faker.string.uuid()
            data.name = i
            data.description = faker.lorem.paragraph()
            data.created_at = new Date()
            data.updated_at = new Date()

            seedData.push(data)
        }

        await this.prisma.cso.createMany({
            data: seedData,
        });
      
    }

    async seedPoTbl(){
        await this.prisma.po.deleteMany({})

        const seedData: Po[] = []

        for(let i of mockData.pos){
            const data = {} as Po
            data.id = faker.string.uuid()
            data.name = i
            data.description = faker.lorem.paragraph()
            data.created_at = new Date()
            data.updated_at = new Date()

            seedData.push(data)
        }

        await this.prisma.po.createMany({
            data: seedData,
        });
      
    }

    async seedNaTbl(){
        await this.prisma.na.deleteMany({})

        const seedData: Na[] = []

        for(let i of mockData.nas){
            const data = {} as Po
            data.id = faker.string.uuid()
            data.name = i
            data.description = faker.lorem.paragraph()
            data.created_at = new Date()
            data.updated_at = new Date()

            seedData.push(data)
        }

        await this.prisma.na.createMany({
            data: seedData,
        });
      
    }

    async seedUserTbl(){
        console.log('seedUserTbl()')

        
    } 

    async seedTeamTbl(){
        console.log('seedTeamTbl()')
    } 

    async seedTeamMemberTbl(){
        console.log('seedTeamMemberTbl()')
    } 

    async seedUserSkillTbl(){
        console.log('seedUserSkillTbl()')
    } 

    async seedSkillCertificateTbl(){
        console.log('seedSkillCertificateTbl()')
    } 

    async truncateDb(){
        await this.prisma.cleanDb()
    }

}
