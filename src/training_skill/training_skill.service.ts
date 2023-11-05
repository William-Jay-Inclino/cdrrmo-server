import { Injectable } from '@nestjs/common';
import { CreateTrainingSkillDto } from './dto/create-training_skill.dto';
import { UpdateTrainingSkillDto } from './dto/update-training_skill.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TrainingSkillService {

    constructor(private prisma: PrismaService){}

    async create(createTrainingSkillDto: CreateTrainingSkillDto) {
        return await this.prisma.trainingSkill.create({
        data: createTrainingSkillDto
        })
    }

    async findAll() {
        return await this.prisma.trainingSkill.findMany() 
    }

    async findOne(id: string) {
        return await this.prisma.trainingSkill.findUniqueOrThrow({
        where: {id}
        })
    }

    async update(id: string, updateTrainingSkillDto: UpdateTrainingSkillDto) {
        return await this.prisma.trainingSkill.update({
        where: {id},
        data: {
            ...updateTrainingSkillDto,
        },
        });
    }

    async remove(id: string) {
        await this.prisma.trainingSkill.delete({
        where: {id},
        });
    }
}
