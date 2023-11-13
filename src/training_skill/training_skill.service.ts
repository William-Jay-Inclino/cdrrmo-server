import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTrainingSkillDto } from './dto/create_training_skill.dto';
import { UpdateTrainingSkillDto } from './dto/update_training_skill.dto';
import { TrainingSkill } from '@prisma/client';

@Injectable()
export class TrainingSkillService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTrainingSkillDto: CreateTrainingSkillDto) {
    try {
      return await this.prisma.trainingSkill.create({
        data: { ...createTrainingSkillDto },
      });
    } catch (error) {
      // Handle database-related errors, e.g., unique constraint violations
      if (error.code === 'P2002') {
        throw new ConflictException('Training skill with the same data already exists.');
      } else {
        throw new InternalServerErrorException('Failed to create a training skill.');
      }
    }
  }

  async findAll() {
    return await this.prisma.trainingSkill.findMany();
  }

  async findOne(id: string) {
    const trainingSkill = await this.prisma.trainingSkill.findUnique({
      where: { id },
    });

    if (!trainingSkill) {
      throw new NotFoundException('Training skill not found.');
    }

    return trainingSkill;
  }

  async update(id: string, updateTrainingSkillDto: UpdateTrainingSkillDto): Promise<TrainingSkill> {
    console.log('TrainingSkillService: update()')
    console.log('id', id)
    const existingSkill = await this.findOne(id);
  
    // Check if a skill with the same name already exists
    const skillWithSameName = await this.prisma.trainingSkill.findFirst({
      where: {
        name: updateTrainingSkillDto.name,
        id: { not: id }, // Exclude the current skill being updated
      },
    });
  
    if (skillWithSameName) {
      throw new ConflictException('Training skill with the same data already exists.');
    }
  
    // Continue with the update logic
    const updatedSkill = await this.prisma.trainingSkill.update({
      where: { id },
      data: { ...updateTrainingSkillDto },
    });
  
    return updatedSkill;
  }
  
  async remove(id: string) {
    const existingSkill = await this.findOne(id);
  
    // If the record exists, proceed with the delete
    await this.prisma.trainingSkill.delete({
      where: { id },
    });
  
    return true;
  }

  async truncate() {
    return await this.prisma.trainingSkill.deleteMany({});
  }
}
