import { PartialType } from '@nestjs/mapped-types';
import { CreatePoDto } from './create-po.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdatePoDto extends PartialType(CreatePoDto) {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
