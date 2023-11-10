import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';
import { Po } from '@prisma/client';

@Injectable()
export class PoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPoDto: CreatePoDto) {
    try {
      return await this.prisma.po.create({
        data: { ...createPoDto },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('PO with the same data already exists.');
      } else {
        throw new InternalServerErrorException('Failed to create PO.');
      }
    }
  }

  async findAll() {
    return await this.prisma.po.findMany();
  }

  async findOne(id: string) {
    const po = await this.prisma.po.findUnique({
      where: { id },
    });

    if (!po) {
      throw new NotFoundException('PO not found.');
    }

    return po;
  }

  async update(id: string, updatePoDto: UpdatePoDto): Promise<Po> {
    const existingPo = await this.findOne(id);
  
    const poWithSameName = await this.prisma.po.findFirst({
      where: {
        name: updatePoDto.name,
        id: { not: id }, 
      },
    });
  
    if (poWithSameName) {
      throw new ConflictException('PO with the same data already exists.');
    }
  
    // Continue with the update logic
    const updatedPo = await this.prisma.po.update({
      where: { id },
      data: { ...updatePoDto },
    });
  
    return updatedPo;
  }
  
  async remove(id: string) {
    const existingPo = await this.findOne(id);
  
    await this.prisma.po.delete({
      where: { id },
    });
  
    return true;
  }

  async truncate() {
    return await this.prisma.po.deleteMany({});
  }
}
