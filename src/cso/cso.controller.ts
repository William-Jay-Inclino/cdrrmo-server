import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { CsoService } from './cso.service';
import { CreateCsoDto } from './dto/create-cso.dto';
import { UpdateCsoDto } from './dto/update-cso.dto';
import { Cso } from '@prisma/client';

@Controller('/api/v1/cso')
export class CsoController {
	constructor(private readonly csoService: CsoService) {}

	@Delete('/truncate')
	@HttpCode(HttpStatus.NO_CONTENT)
	async truncate(): Promise<void> {
		await this.csoService.truncate();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createCsoDto: CreateCsoDto): Promise<CreateCsoDto> {
		return await this.csoService.create(createCsoDto);
	}

	@Get()
	async findAll(): Promise<Cso[]> {
		return await this.csoService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Cso> {
		const cso = await this.csoService.findOne(id);
		return cso;
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id') id: string,
		@Body() updateCsoDto: UpdateCsoDto
	): Promise<Cso> {
		const updatedCso = await this.csoService.update(id, updateCsoDto);
		return updatedCso;
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param('id') id: string): Promise<void> {
		await this.csoService.remove(id);
	}
}
