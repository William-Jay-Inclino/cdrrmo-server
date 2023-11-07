import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { TrainingSkillService } from './training_skill.service';
import { CreateTrainingSkillDto } from './dto/create_training_skill.dto';
import { UpdateTrainingSkillDto } from './dto/update_training_skill.dto';
import { TrainingSkill } from '@prisma/client';

@Controller('/api/v1/training-skill')
export class TrainingSkillController {
	constructor(private readonly trainingSkillService: TrainingSkillService) {}

	@Delete('/truncate')
	@HttpCode(HttpStatus.NO_CONTENT)
	async truncate(): Promise<void> {
		// Clear all training skills.
		await this.trainingSkillService.truncate();
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createTrainingSkillDto: CreateTrainingSkillDto): Promise<CreateTrainingSkillDto> {
		// Create a new training skill and return it.
		return await this.trainingSkillService.create(createTrainingSkillDto);
	}

	@Get()
	async findAll(): Promise<TrainingSkill[]> {
		// Retrieve and return a list of all training skills.
		return await this.trainingSkillService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<TrainingSkill> {
		// Retrieve a specific training skill by ID.
		const trainingSkill = await this.trainingSkillService.findOne(id);
		return trainingSkill;
	}

	@Patch(':id')
	@UsePipes(new ValidationPipe())
	async update(
		@Param('id') id: string,
		@Body() updateTrainingSkillDto: UpdateTrainingSkillDto
	): Promise<TrainingSkill> {
		// Update a training skill and return the updated result.
		const updatedSkill = await this.trainingSkillService.update(id, updateTrainingSkillDto);
		return updatedSkill;
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param('id') id: string): Promise<void> {
		// Remove a training skill by ID. It throws an exception if not found.
		await this.trainingSkillService.remove(id);
	}
}
