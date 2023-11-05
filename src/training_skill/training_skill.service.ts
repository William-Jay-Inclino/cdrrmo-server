import { Injectable } from '@nestjs/common';
import { CreateTrainingSkillDto } from './dto/create-training_skill.dto';
import { UpdateTrainingSkillDto } from './dto/update-training_skill.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TrainingSkillService {

  constructor(private prisma: PrismaService){}

  create(createTrainingSkillDto: CreateTrainingSkillDto) {
    return 'This action adds a new trainingSkill';
  }

  findAll() {
    return `This action returns all trainingSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingSkill`;
  }

  update(id: number, updateTrainingSkillDto: UpdateTrainingSkillDto) {
    return `This action updates a #${id} trainingSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingSkill`;
  }
}
