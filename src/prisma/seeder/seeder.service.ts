import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as mockData from './mock-data';
import { Bart, Cso, Emergency, Na, Po, SkillCertificate, Team, TeamMember, TrainingSkill, User, UserSkill } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { GenderEnum, TeamStatusEnum, UserLevelEnum, UserStatusEnum, UserTypeEnum } from '../../shared/entities';
@Injectable()
export class SeederService {

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
        this.trainingSkills = await this.seedTrainingSkillTbl()
        this.emergencies = await this.seedEmergencyTbl()
        this.barts = await this.seedBartTbl()
        this.csos = await this.seedCsoTbl()
        this.pos = await this.seedPoTbl()
        this.nas = await this.seedNaTbl()
        this.users = await this.seedUserTbl()
        this.teams = await this.seedTeamTbl()
        this.teamMembers = await this.seedTeamMemberTbl()
        this.userSkills = await this.seedUserSkillTbl()
        this.skillCertificates = await this.seedSkillCertificateTbl()
    }

    async seedTrainingSkillTbl(): Promise<TrainingSkill[]>{

        console.log('seeding training skill table...')

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
        
        return seedData
    }

    async seedEmergencyTbl(): Promise<Emergency[]>{

        console.log('seeding emergency table...')

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
        
        return seedData

    }

    async seedBartTbl(): Promise<Bart[]>{

        console.log('seeding bart table...')
        
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

        return seedData
      
    }

    async seedCsoTbl(): Promise<Cso[]>{
        console.log('seeding cso table...')
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
        
        return seedData
    }

    async seedPoTbl(): Promise<Po[]>{
        console.log('seeding po table...')
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

        return seedData

    }

    async seedNaTbl(): Promise<Na[]>{
        console.log('seeding na table...')
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
        
        return seedData
    }

    async seedUserTbl(count = 10): Promise<User[]> {

        console.log('seeding user table...')

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

        let csos = this.csos
        let pos = this.pos 
        let barts = this.barts 
        let nas = this.nas

        if(csos.length === 0){
            console.log('empty csos')
            csos = await this.seedCsoTbl()
        }

        if(pos.length === 0){
            console.log('empty pos')
            pos = await this.seedPoTbl()
        }

        if(barts.length === 0){
            console.log('empty barts')
            barts = await this.seedBartTbl()
        }

        if(nas.length === 0){
            console.log('empty nas')
            nas = await this.seedNaTbl()
        }

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
                data.bart_id = barts[Math.floor(Math.random() * barts.length)].id
            }

            else if(data.type === UserTypeEnum.ACDV_CSO){
                data.cso_id = csos[Math.floor(Math.random() * csos.length)].id
            }

            if(data.type === UserTypeEnum.ACDV_PO){
                data.po_id = pos[Math.floor(Math.random() * pos.length)].id
            }

            if(data.type === UserTypeEnum.NA){
                data.na_id = nas[Math.floor(Math.random() * nas.length)].id
            }

            const fn = data.first_name.toLowerCase().replace(/\s/g, "")
            const ln = data.last_name.toLowerCase().replace(/\s/g, "")

            data.user_name = fn + ln  + faker.number.int({min: 10, max: 100}).toString()
            data.password_hash = faker.internet.password()

            data.created_at = new Date()
            data.updated_at = new Date()

            seedData.push(data)

        }

        await this.prisma.user.createMany({
            data: seedData,
        });

        return seedData

    } 

    async seedTeamTbl(){
        console.log('seeding team table...')

        await this.prisma.team.deleteMany({})

        let users = this.users 

        if(users.length === 0){
            console.log('empty users')
            users = await this.seedUserTbl()
        }

        const seedData: Team[] = []

        for(let i of mockData.teams){
            const data = {} as Team 
            data.id = faker.string.uuid()
            data.name = i 
            data.status = TeamStatusEnum.ACTIVE
            
            data.team_leader_id = users[Math.floor(Math.random() * users.length)].id

            data.created_at = new Date()
            data.updated_at = new Date()

            seedData.push(data)
        }

        // console.log('seedData', seedData)

        await this.prisma.team.createMany({
            data: seedData,
        });

        return seedData

    } 

    async seedTeamMemberTbl(): Promise<TeamMember[]>{
        console.log('seeding team member table...')

        await this.prisma.teamMember.deleteMany({})

        const seedData: TeamMember[] = []

        let users = this.users 

        if(users.length === 0){
            users = await this.seedUserTbl()
        }


        for(let user of users){

            const userIsATeamLeader = await this.prisma.team.findUnique({
                where: {team_leader_id: user.id},
                include: {
                    team_leader: true,
                    teamMembers: true,
                }
            })

            if(userIsATeamLeader){
                console.log(userIsATeamLeader)
                console.log('user is a team leader. Not added as a member')
                continue 
            }

            const userHasTeam = await this.prisma.teamMember.findUnique(
                {
                    where: {member_id: user.id},
                    include: {
                        team: true,
                        member: true,
                    }
                }
            )

            if(userHasTeam){
                console.log('user has a team. Not added as a member')
                console.log(userHasTeam)
                continue
            }

            const data = {} as TeamMember

            data.id = faker.string.uuid()
            data.member_id = user.id
            
            let teams = this.teams 

            if(teams.length === 0){
                teams = await this.seedTeamTbl()
            }

            data.team_id = teams[Math.floor(Math.random() * teams.length)].id
            data.created_at = new Date()
            data.updated_at = new Date()

            console.log(data)

            console.log('User is added as member')

            seedData.push(data)
        }

        await this.prisma.teamMember.createMany({
            data: seedData,
        });

        return seedData
    } 

    async seedUserSkillTbl(countSkill = 2): Promise<UserSkill[]>{
        console.log('seeding user skill table...')
        await this.prisma.userSkill.deleteMany({})

        const seedData: UserSkill[] = []

        let users = this.users 

        if(users.length === 0){
            users = await this.seedUserTbl()
        }

        let trainingSkills = this.trainingSkills

        if(trainingSkills.length === 0){
            trainingSkills = await this.seedTrainingSkillTbl()
        }

        // countSkill is the number of skill per user
        for(let i = 1; i <= countSkill; i++){

            for(let user of users){
                
                const data = {} as UserSkill
                data.id = faker.string.uuid()
                data.user_id = user.id

                let limit = 10
                while(true){

                    if(limit === 0) break // avoid infinite loop

                    // random skill should be unique per user
                    const randomSkillId = trainingSkills[Math.floor(Math.random() * trainingSkills.length)].id
                    const isExistSkill = seedData.find(j => j.user_id === user.id && j.training_skill_id === randomSkillId)
    
                    if(!isExistSkill){
                        data.training_skill_id = randomSkillId
                        break
                    }

                    limit--
                }

                data.created_at = new Date() 
                data.updated_at = new Date() 
                
                seedData.push(data)
            }

        }

        console.log('seedData', seedData)

        await this.prisma.userSkill.createMany({
            data: seedData,
        });

        return seedData

    } 

    async seedSkillCertificateTbl(): Promise<SkillCertificate[]>{
        console.log('seeding skill certificate table...')
        return []
    } 

    async truncateDb(){
        console.log('truncating db...')
        await this.prisma.cleanDb()
    }

}
