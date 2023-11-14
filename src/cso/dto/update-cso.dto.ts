import { CreateCsoDto } from './create-cso.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateCsoDto extends PartialType(CreateCsoDto) {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
