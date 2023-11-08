import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // async create(createBartDto: CreateBartDto) {
  //   try {
  //     return await this.prisma.bart.create({
  //       data: { ...createBartDto },
  //     });
  //   } catch (error) {
  //     if (error.code === 'P2002') {
  //       throw new ConflictException('BART with the same data already exists.');
  //     } else {
  //       throw new InternalServerErrorException('Failed to create BART.');
  //     }
  //   }
  // }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  // async findOne(id: string) {
  //   const bart = await this.prisma.bart.findUnique({
  //     where: { id },
  //   });

  //   if (!bart) {
  //     throw new NotFoundException('BART not found.');
  //   }

  //   return bart;
  // }

  // async update(id: string, updateBartDto: UpdateBartDto): Promise<Bart> {
  //   const existingBart = await this.findOne(id);
  
  //   const bartWithSameName = await this.prisma.bart.findFirst({
  //     where: {
  //       name: updateBartDto.name,
  //       id: { not: id }, 
  //     },
  //   });
  
  //   if (bartWithSameName) {
  //     throw new ConflictException('BART with the same data already exists.');
  //   }
  
  //   // Continue with the update logic
  //   const updatedBart = await this.prisma.bart.update({
  //     where: { id },
  //     data: { ...updateBartDto },
  //   });
  
  //   return updatedBart;
  // }
  
  // async remove(id: string) {
  //   const existingBart = await this.findOne(id);
  
  //   await this.prisma.bart.delete({
  //     where: { id },
  //   });
  
  //   return true;
  // }

  // async truncate() {
  //   return await this.prisma.bart.deleteMany({});
  // }
}
