import { PartialType } from '@nestjs/mapped-types';
import { CreateBartDto } from './create-bart.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateBartDto extends PartialType(CreateBartDto) {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
