import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingSkillDto } from './create-training_skill.dto';

export class UpdateTrainingSkillDto extends PartialType(CreateTrainingSkillDto) {
    description?: string
}
