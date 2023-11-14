import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateTrainingSkillDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
