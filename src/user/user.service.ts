import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}


	// this will auto generate a user name and password
	// password is hash using bcrypt
	// send user name and password via email and/or sms ?
	async create(createUserDto: CreateUserDto): Promise<User> {
		try {

			const { skills, ...userData } = createUserDto;

			// validate if skills exist in training_skills table
			const skillIds = skills.map((skill) => skill.training_skill_id);
			const skillsExist = await this.validateTrainingSkillsExist(skillIds)

			if(!skillsExist){
				throw new NotFoundException('One or more training_skill_id values do not exist.');
			}

			delete userData.password // delete password prop since it's not included in user schema

			// use transaction so that if 1 transaction fails it will rollback

			const result = await this.prisma.$transaction(async (prismaClient) => {
				
				const data: Prisma.UserCreateInput = {
				...userData,
				// auto generate unique username base on first_name and last_name
				// user_name: this.generateUniqueUserName(userData.first_name, userData.last_name),
				// auto generate password and hash it
				// send username and password via sms or email?
				password_hash: await this.hashPassword(createUserDto.password),
				};

				console.log('data', data)
		
				const user = await prismaClient.user.create({ data });
				
				// save userSkills to user_skills table
				if (skills && skills.length > 0) {

					const userSkills: Prisma.UserSkillCreateManyInput[] = skills.map((skill) => {
						return {
						user_id: user.id,
						training_skill_id: skill.training_skill_id,
						};
					});
			
					await prismaClient.userSkill.createMany({ data: userSkills });
				}
				
				
				return user;
			});
	
		  	// Transaction was successful
		  	// return result;

			const addedUser = await this.findOne(result.id)
			// remove password_hash in returning newly added user 
			delete addedUser.password_hash 
			return addedUser

		} catch (error) {
			console.error('Error:', error);
		
			if (error.code === 'P2002') {
				throw new ConflictException('User with the same data already exists.');
			} else {
				throw new InternalServerErrorException('Failed to create User.');
			}
		}
	}

	// I use the remove and add (Replace) approach for updating the user skills 
	async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
		console.log('userId', userId)
		try {
			const { skills, ...updatedUserData } = updateUserDto;
	
			// Check if the user with the provided userId exists
			const existingUser = await this.prisma.user.findUnique({
				where: {
					id: userId,
				},
			});
	
			if (!existingUser) {
				throw new NotFoundException(`User with ID ${userId} not found.`);
			}
	
			// Validate if skills exist in the training_skills table
			if (skills && skills.length > 0) {
				const skillIds = skills.map((skill) => skill.training_skill_id);
				const skillsExist = await this.validateTrainingSkillsExist(skillIds);
	
				if (!skillsExist) {
					throw new NotFoundException('One or more training_skill_id values do not exist.');
				}
			}
	
			// Use a transaction to ensure atomicity
			const result = await this.prisma.$transaction(async (prismaClient) => {
				// Define the data to update in the user record
				const userDataToUpdate: Prisma.UserUpdateInput = {
					...updatedUserData,
				};
	
				// Remove all existing skills for the user
				await prismaClient.userSkill.deleteMany({
					where: {
						user_id: userId,
					},
				});
	
				// Add the new userSkills to the user_skills table
				if (skills && skills.length > 0) {
					const userSkillsToCreate: Prisma.UserSkillCreateManyInput[] = skills.map((skill) => {
						return {
							user_id: userId,
							training_skill_id: skill.training_skill_id,
						};
					});
	
					await prismaClient.userSkill.createMany({ data: userSkillsToCreate });
				}
	
				// Update the user in the database
				const updatedUser = await prismaClient.user.update({
					where: {
						id: userId,
					},
					data: userDataToUpdate,
				});
	
				// Remove sensitive fields from the returning updated user
				delete updatedUser.password_hash;
	
				return updatedUser;
			});
	
			// Transaction was successful
			return result;
		} catch (error) {
			console.error('Error:', error);
	
			if (error.code === 'P2002') {
				throw new ConflictException('User with the same data already exists.');
			} else {
				throw new InternalServerErrorException('Failed to update User.');
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
	
		if (!user) {
		  throw new NotFoundException('User not found.');
		}
	
		return user;
	}

	async isUsernameTaken(user_name: string): Promise<boolean> {
		const user = await this.prisma.user.findUnique({
		  where: { user_name },
		});
	
		return !!user; 
	}

	async remove(id: string) {
		const existingUser = await this.findOne(id);
	  
		await this.prisma.user.delete({
		  where: { id },
		});
	  
		return true;
	}

	async truncate() {
		return await this.prisma.user.deleteMany({});
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

	private async validateTrainingSkillsExist(skillIds: string[]): Promise<boolean> {
		console.log('skillIds', skillIds)
		const existingSkills = await this.prisma.trainingSkill.findMany({
		  where: {
			id: {
			  in: skillIds,
			},
		  },
		});

		console.log('existingSkills', existingSkills)
	  
		return existingSkills.length === skillIds.length;
	}

}
