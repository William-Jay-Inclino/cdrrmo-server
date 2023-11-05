import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingSkillService } from './training_skill.service';
import { CreateTrainingSkillDto } from './dto/create-training_skill.dto';
import { UpdateTrainingSkillDto } from './dto/update-training_skill.dto';

@Controller('/api/v1/training-skill')
export class TrainingSkillController {
  constructor(private readonly trainingSkillService: TrainingSkillService) {}

  @Delete('/truncate')
  truncate() {
    return this.trainingSkillService.truncate();
  }

  @Post()
  create(@Body() createTrainingSkillDto: CreateTrainingSkillDto) {
    return this.trainingSkillService.create(createTrainingSkillDto);
  }

  @Get()
  findAll() {
    return this.trainingSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingSkillService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingSkillDto: UpdateTrainingSkillDto) {
    return this.trainingSkillService.update(id, updateTrainingSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingSkillService.remove(id);
  }


}
