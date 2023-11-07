import { PartialType } from '@nestjs/mapped-types';
import { CreateEmergencyDto } from './create-emergency.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateEmergencyDto extends PartialType(CreateEmergencyDto) {
    @IsString()
    @IsNotEmpty()
    @Length(1, 255) 
    name: string;
  
    @IsString()
    @IsOptional()
    @Length(1, 255) 
    description?: string;
}
