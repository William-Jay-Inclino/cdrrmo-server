import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { NaService } from './na.service';
import { CreateNaDto } from './dto/create-na.dto';
import { UpdateNaDto } from './dto/update-na.dto';
import { Na } from '@prisma/client';

@Controller('/api/v1/na')
export class NaController {
	constructor(private readonly naService: NaService) {}

	@Delete('/truncate')
	@HttpCode(HttpStatus.NO_CONTENT)
	async truncate(): Promise<void> {
		await this.naService.truncate();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createNaDto: CreateNaDto): Promise<CreateNaDto> {
		return await this.naService.create(createNaDto);
	}

	@Get()
	async findAll(): Promise<Na[]> {
		return await this.naService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Na> {
		const na = await this.naService.findOne(id);
		return na;
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id') id: string,
		@Body() updateNaDto: UpdateNaDto
	): Promise<Na> {
		const updatedNa = await this.naService.update(id, updateNaDto);
		return updatedNa;
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param('id') id: string): Promise<void> {
		await this.naService.remove(id);
	}
}
