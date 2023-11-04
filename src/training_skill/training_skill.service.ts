import { Injectable } from '@nestjs/common';
import { CreateTrainingSkillDto } from './dto/create-training_skill.dto';
import { UpdateTrainingSkillDto } from './dto/update-training_skill.dto';
import { TrainingSkill } from '@prisma/client';

@Injectable()
export class TrainingSkillService {
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
