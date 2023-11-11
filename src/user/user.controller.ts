import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from '@prisma/client';

@Controller('/api/v1/user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Delete('/truncate')
	@HttpCode(HttpStatus.NO_CONTENT)
	async truncate(): Promise<void> {
		await this.userService.truncate();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createUserDto: CreateUserDto): Promise<User> {
		return await this.userService.create(createUserDto);
	}

	@Get()
	async findAll(): Promise<User[]> {
		return await this.userService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<User> {
		const user = await this.userService.findOne(id);
		return user;
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id') id: string,
		@Body() updateUserDto: UpdateUserDto
	): Promise<User> {
		const updatedUser = await this.userService.update(id, updateUserDto);
		return updatedUser;
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param('id') id: string): Promise<void> {
		await this.userService.remove(id);
	}
}
