import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { BartService } from './bart.service';
import { CreateBartDto } from './dto/create-bart.dto';
import { UpdateBartDto } from './dto/update-bart.dto';
import { Bart } from '@prisma/client';

@Controller('/api/v1/bart')
export class BartController {
	constructor(private readonly bartService: BartService) {}

	@Delete('/truncate')
	@HttpCode(HttpStatus.NO_CONTENT)
	async truncate(): Promise<void> {
		await this.bartService.truncate();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createBartDto: CreateBartDto): Promise<CreateBartDto> {
		return await this.bartService.create(createBartDto);
	}

	@Get()
	async findAll(): Promise<Bart[]> {
		return await this.bartService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Bart> {
		const bart = await this.bartService.findOne(id);
		return bart;
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id') id: string,
		@Body() updateBartDto: UpdateBartDto
	): Promise<Bart> {
		const updatedBart = await this.bartService.update(id, updateBartDto);
		return updatedBart;
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param('id') id: string): Promise<void> {
		await this.bartService.remove(id);
	}
}
