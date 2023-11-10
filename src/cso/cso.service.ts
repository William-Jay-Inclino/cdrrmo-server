import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Cso } from '@prisma/client';
import { CreateCsoDto } from './dto/create-cso.dto';
import { UpdateCsoDto } from './dto/update-cso.dto';

@Injectable()
export class CsoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCsoDto: CreateCsoDto) {
    try {
      return await this.prisma.cso.create({
        data: { ...createCsoDto },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('CSO with the same data already exists.');
      } else {
        throw new InternalServerErrorException('Failed to create CSO.');
      }
    }
  }

  async findAll() {
    return await this.prisma.cso.findMany();
  }

  async findOne(id: string) {
    const cso = await this.prisma.cso.findUnique({
      where: { id },
    });

    if (!cso) {
      throw new NotFoundException('CSO not found.');
    }

    return cso;
  }

  async update(id: string, updateCsoDto: UpdateCsoDto): Promise<Cso> {
    const existingCso = await this.findOne(id);
  
    const csoWithSameName = await this.prisma.cso.findFirst({
      where: {
        name: updateCsoDto.name,
        id: { not: id }, 
      },
    });
  
    if (csoWithSameName) {
      throw new ConflictException('CSO with the same data already exists.');
    }
  
    const updatedCso = await this.prisma.cso.update({
      where: { id },
      data: { ...updateCsoDto },
    });
  
    return updatedCso;
  }
  
  async remove(id: string) {
    const existingCso = await this.findOne(id);
  
    await this.prisma.cso.delete({
      where: { id },
    });
  
    return true;
  }

  async truncate() {
    return await this.prisma.cso.deleteMany({});
  }
}
