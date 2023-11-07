import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { PoService } from './po.service';
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';
import { Po } from '@prisma/client';

@Controller('/api/v1/po')
export class PoController {
	constructor(private readonly poService: PoService) {}

	@Delete('/truncate')
	@HttpCode(HttpStatus.NO_CONTENT)
	async truncate(): Promise<void> {
		await this.poService.truncate();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createPoDto: CreatePoDto): Promise<CreatePoDto> {
		return await this.poService.create(createPoDto);
	}

	@Get()
	async findAll(): Promise<Po[]> {
		return await this.poService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Po> {
		const po = await this.poService.findOne(id);
		return po;
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id') id: string,
		@Body() updatePoDto: UpdatePoDto
	): Promise<Po> {
		const updatedPo = await this.poService.update(id, updatePoDto);
		return updatedPo;
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param('id') id: string): Promise<void> {
		await this.poService.remove(id);
	}
}
