import { PartialType } from '@nestjs/mapped-types';
import { CreateNaDto } from './create-na.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateNaDto extends PartialType(CreateNaDto) {
    @IsString()
    @IsNotEmpty()
    @Length(1, 255) 
    name: string;
  
    @IsString()
    @IsOptional()
    @Length(1, 255) 
    description?: string;
}
