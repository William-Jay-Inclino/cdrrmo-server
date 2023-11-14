import { PartialType } from '@nestjs/mapped-types';
import { CreateEmergencyDto } from './create-emergency.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateEmergencyDto extends PartialType(CreateEmergencyDto) {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
