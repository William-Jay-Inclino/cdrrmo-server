import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { UserSkillDto } from './dto';
@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createUserDto: CreateUserDto) {
		try {
			const userData = this.mapUserDtoToPrismaData(createUserDto);
			const user = await this.prisma.user.create({ data: userData });
		
			if (createUserDto.skills && createUserDto.skills.length > 0) {
				await this.createAndAssociateUserSkills(user.id, createUserDto.skills);
			}
		
			return user;
			} catch (error) {
			// Handle any errors, log them, and potentially return a meaningful error response
			throw new Error(`Failed to create user: ${error.message}`);
		}
	}
	
	private mapUserDtoToPrismaData(createUserDto: CreateUserDto): User {
		const { skills, ...userData } = createUserDto;
		return userData as User;
	}
	
	private async createAndAssociateUserSkills(userId: string, skillDtos: UserSkillDto[]) {
		const skillDataArray = skillDtos.map((skillDto) => ({
		  ...this.mapUserSkillDtoToPrismaData(skillDto),
		  user_id: userId,
		}));
	  
		await this.prisma.userSkill.createMany({
		  data: skillDataArray,
		});
	}
	
	private mapUserSkillDtoToPrismaData(skillDto: UserSkillDto) {
		return skillDto;
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
			skills: true     
		}
		});
	}
}
