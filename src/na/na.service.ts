import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNaDto } from './dto/create-na.dto';
import { UpdateNaDto } from './dto/update-na.dto';
import { Na } from '@prisma/client';

@Injectable()
export class NaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNaDto: CreateNaDto) {
    try {
      return await this.prisma.na.create({
        data: { ...createNaDto },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('National Agency with the same data already exists.');
      } else {
        throw new InternalServerErrorException('Failed to create National Agency.');
      }
    }
  }

  async findAll() {
    return await this.prisma.na.findMany();
  }

  async findOne(id: string) {
    const na = await this.prisma.na.findUnique({
      where: { id },
    });

    if (!na) {
      throw new NotFoundException('National Agency not found.');
    }

    return na;
  }

  async update(id: string, updateNaDto: UpdateNaDto): Promise<Na> {
    const existingNa = await this.findOne(id);
  
    const naWithSameName = await this.prisma.na.findFirst({
      where: {
        name: updateNaDto.name,
        id: { not: id }, 
      },
    });
  
    if (naWithSameName) {
      throw new ConflictException('National Agency with the same data already exists.');
    }
  
    const updatedNa = await this.prisma.na.update({
      where: { id },
      data: { ...updateNaDto },
    });
  
    return updatedNa;
  }
  
  async remove(id: string) {
    const existingNa = await this.findOne(id);
  
    await this.prisma.na.delete({
      where: { id },
    });
  
    return true;
  }

  async truncate() {
    return await this.prisma.na.deleteMany({});
  }
}
