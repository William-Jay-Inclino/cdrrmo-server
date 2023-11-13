import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingSkillDto } from './create_training_skill.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateTrainingSkillDto extends PartialType(CreateTrainingSkillDto) {
    @IsString()
    @IsNotEmpty()
    @Length(1, 255) 
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
