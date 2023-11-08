import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as mockData from './mock-data';
import { Bart, Cso, Emergency, Na, Po, SkillCertificate, Team, TeamMember, TrainingSkill, User, UserSkill } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { GenderEnum, UserLevelEnum, UserStatusEnum, UserTypeEnum } from './entities';

@Injectable()
export class SharedService {

    trainingSkills: TrainingSkill[] = []
    emergencies: Emergency[] = []
    barts: Bart[] = []
    csos: Cso[] = []
    pos: Po[] = []
    nas: Na[] = []
    users: User[] = []
    teams: Team[] = []
    teamMembers: TeamMember[] = []
    userSkills: UserSkill[] = []
    skillCertificates: SkillCertificate[] = []

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

    async seedTrainingSkillTbl(): Promise<TrainingSkill[]>{
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
        
        this.trainingSkills = seedData

        return seedData
    }

    async seedEmergencyTbl(): Promise<Emergency[]>{
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
        
        this.emergencies = seedData 

        return seedData

    }

    async seedBartTbl(): Promise<Bart[]>{
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

        this.barts = seedData

        return seedData
      
    }

    async seedCsoTbl(): Promise<Cso[]>{
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
        
        this.csos = seedData
        return seedData
    }

    async seedPoTbl(): Promise<Po[]>{
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

        this.pos = seedData
        return seedData

    }

    async seedNaTbl(): Promise<Na[]>{
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
        
        this.nas = seedData
        return seedData
    }

    async seedUserTbl(count = 10): Promise<User[]> {

        await this.prisma.user.deleteMany({})

        const seedData: User[] = []

        const userLevelValues = [
            UserLevelEnum.ADMIN,
            UserLevelEnum.DISPATCHER,
            UserLevelEnum.TEAM_LEADER,
            UserLevelEnum.FIELD_OPERATOR,
        ]

        const genderValues = [
            GenderEnum.FEMALE,
            GenderEnum.MALE,
        ]

        const bloodTypeValues = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

        const userStatusValues = [
            UserStatusEnum.ACTIVE,
            UserStatusEnum.INACTIVE,
        ]

        const userTypeValues = [
            UserTypeEnum.LGU_CASUAL,
            UserTypeEnum.LGU_JOB_ORDER,
            UserTypeEnum.LGU_REGULAR,
            UserTypeEnum.ACDV_BART,
            UserTypeEnum.ACDV_CSO,
            UserTypeEnum.ACDV_PO,
            UserTypeEnum.ACDV_INDIVIDUAL,
            UserTypeEnum.NA,
        ]

        for(let i = 1; i <= count; i++){

            const data = {} as User
            data.id = faker.string.uuid()
            data.user_level = userLevelValues[Math.floor(Math.random() * userLevelValues.length)]
            data.last_name = faker.person.lastName()
            data.first_name = faker.person.firstName()
            data.gender = genderValues[Math.floor(Math.random() * genderValues.length)]
            data.address = faker.location.country()
            data.birth_date = faker.date.birthdate()
            data.contact_no = faker.phone.number()
            data.blood_type = bloodTypeValues[Math.floor(Math.random() * bloodTypeValues.length)]
            data.status = userStatusValues[Math.floor(Math.random() * userStatusValues.length)]
            data.dispatch_status = null
            data.type = userTypeValues[Math.floor(Math.random() * userTypeValues.length)]
            
            if(data.type === UserTypeEnum.ACDV_BART){
                console.log('UserTypeEnum.ACDV_BART')
                
                if(this.barts.length > 0){
                    const indx = Math.floor(Math.random() * this.barts.length);
                    data.bart_id = this.barts[indx].id
                }else{
                    const barts = await this.seedBartTbl()
                    const indx = Math.floor(Math.random() * barts.length);
                    data.bart_id = barts[indx].id
                }

            }

            else if(data.type === UserTypeEnum.ACDV_CSO){
                console.log('UserTypeEnum.ACDV_CSO')
                
                if(this.csos.length > 0){
                    const indx = Math.floor(Math.random() * this.csos.length);
                    data.cso_id = this.csos[indx].id
                }else{
                    const csos = await this.seedCsoTbl()
                    const indx = Math.floor(Math.random() * csos.length);
                    data.cso_id = csos[indx].id
                }

            }

            else if(data.type === UserTypeEnum.ACDV_PO){
                console.log('UserTypeEnum.ACDV_PO')
                if(this.pos.length > 0){
                    const indx = Math.floor(Math.random() * this.pos.length);
                    data.po_id = this.pos[indx].id
                }else{
                    const pos = await this.seedPoTbl()
                    const indx = Math.floor(Math.random() * pos.length);
                    data.po_id = pos[indx].id
                }
            }

            else if(data.type === UserTypeEnum.NA){
                console.log('UserTypeEnum.NA')
                if(this.nas.length > 0){
                    const indx = Math.floor(Math.random() * this.nas.length);
                    data.na_id = this.nas[indx].id
                }else{
                    const nas = await this.seedNaTbl()
                    const indx = Math.floor(Math.random() * nas.length);
                    data.na_id = nas[indx].id
                }
            }

            data.user_name = '' // tba
            data.password_hash = '' // tba

            data.created_at = new Date()
            data.updated_at = new Date()

            console.log({data})

            seedData.push(data)

        }

        await this.prisma.user.createMany({
            data: seedData,
        });

        this.users = seedData

        return seedData

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
