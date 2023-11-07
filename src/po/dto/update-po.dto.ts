import { PartialType } from '@nestjs/mapped-types';
import { CreatePoDto } from './create-po.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdatePoDto extends PartialType(CreatePoDto) {
    @IsString()
    @IsNotEmpty()
    @Length(1, 255) 
    name: string;
  
    @IsString()
    @IsOptional()
    @Length(1, 255) 
    description?: string;
}
