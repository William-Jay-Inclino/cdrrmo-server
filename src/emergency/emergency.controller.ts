import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, ValidationPipe, UsePipes, HttpCode } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { CreateEmergencyDto } from './dto/create-emergency.dto';
import { UpdateEmergencyDto } from './dto/update-emergency.dto';
import { Emergency } from '@prisma/client';

@Controller('/api/v1/emergency')
export class EmergencyController {
    constructor(private readonly emergencyService: EmergencyService) {}

	@Delete('/truncate')
	@HttpCode(HttpStatus.NO_CONTENT)
	async truncate(): Promise<void> {
		await this.emergencyService.truncate();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createEmergencyDto: CreateEmergencyDto): Promise<CreateEmergencyDto> {
		return await this.emergencyService.create(createEmergencyDto);
	}

	@Get()
	async findAll(): Promise<Emergency[]> {
		return await this.emergencyService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Emergency> {
		const emergency = await this.emergencyService.findOne(id);
		return emergency;
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id') id: string,
		@Body() updateEmergencyDto: UpdateEmergencyDto
	): Promise<Emergency> {
		const updatedEmergency = await this.emergencyService.update(id, updateEmergencyDto);
		return updatedEmergency;
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param('id') id: string): Promise<void> {
		await this.emergencyService.remove(id);
	}

}
