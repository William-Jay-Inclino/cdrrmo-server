import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTrainingSkillDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255) 
  description: string;
}
