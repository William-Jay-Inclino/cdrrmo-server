import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, TrainingSkill, User, UserSkill } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		try {
		  const result = await this.prisma.$transaction(async (prismaClient) => {
			const { skills, ...userData } = createUserDto;
	
			const data: Prisma.UserCreateInput = {
			  ...userData,
			  user_name: this.generateUniqueUserName(userData.first_name, userData.last_name),
			  password_hash: await this.hashPassword(faker.internet.password()),
			};
	
			const user = await prismaClient.user.create({ data });
	
			if (skills && skills.length > 0) {
			  const userSkills: Prisma.UserSkillCreateManyInput[] = skills.map((skill) => {
				return {
				  user_id: user.id,
				  training_skill_id: skill.training_skill_id,
				};
			  });
	
			  await prismaClient.userSkill.createMany({ data: userSkills });
			}
			
			delete user.password_hash
			return user;
		  });
	
		  // Transaction was successful
		  return result;
		} catch (error) {
		  console.error('Error:', error);
	
		  if (error.code === 'P2002') {
			throw new ConflictException('User with the same data already exists.');
		  } else {
			throw new InternalServerErrorException('Failed to create User.');
		  }
		}
	}

	async findAll() {
		return await this.prisma.user.findMany({
		include: {
			Bart: true, 
			Cso: true,  
			Po: true,  
			Na: true,  
			teamMembers: true, 
			teamLeader: true,  
			skills: {
				include: {
					TrainingSkill: true,
				}
			}     
		}
		});
	}

	async findOne(id: string): Promise<User>{
		const user = await this.prisma.user.findUnique({
		  where: { id },
		});
	
		if (!user) {
		  throw new NotFoundException('User not found.');
		}
	
		return user;
	}

	private generateUniqueUserName(firstName: string, lastName: string): string {
		const randomSuffix = Math.floor(Math.random() * 10000); // Generate a random number
		return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomSuffix}`;
	}

	private hashPassword(password: string) {
		// Hash the password using bcrypt
		const saltRounds = 10; // You can adjust the number of salt rounds
		return bcrypt.hash(password, saltRounds);
	}

	async truncate() {
		return await this.prisma.user.deleteMany({});
	}
	  

}
