import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmergencyDto } from './dto/create-emergency.dto';
import { UpdateEmergencyDto } from './dto/update-emergency.dto';
import { Emergency } from '@prisma/client';

@Injectable()
export class EmergencyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmergencyDto: CreateEmergencyDto) {
    try {
      return await this.prisma.emergency.create({
        data: { ...createEmergencyDto },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Emergency with the same data already exists.');
      } else {
        throw new InternalServerErrorException('Failed to create emergency.');
      }
    }
  }

  async findAll() {
    return await this.prisma.emergency.findMany();
  }

  async findOne(id: string) {
    const emergency = await this.prisma.emergency.findUnique({
      where: { id },
    });

    if (!emergency) {
      throw new NotFoundException('Emergency not found.');
    }

    return emergency;
  }

  async update(id: string, updateEmergencyDto: UpdateEmergencyDto): Promise<Emergency> {
    const existingEmergency = await this.findOne(id);
  
    const emergencyWithSameName = await this.prisma.emergency.findFirst({
      where: {
        name: updateEmergencyDto.name,
        id: { not: id }, 
      },
    });
  
    if (emergencyWithSameName) {
      throw new ConflictException('Emergency with the same data already exists.');
    }
  
    const updatedEmergency = await this.prisma.emergency.update({
      where: { id },
      data: { ...updateEmergencyDto },
    });
  
    return updatedEmergency;
  }
  
  async remove(id: string) {
    const existingEmergency = await this.findOne(id);
  
    await this.prisma.emergency.delete({
      where: { id },
    });
  
    return true;
  }

  async truncate() {
    return await this.prisma.emergency.deleteMany({});
  }
}
