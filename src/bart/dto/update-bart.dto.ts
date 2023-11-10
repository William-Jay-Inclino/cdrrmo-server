import { PartialType } from '@nestjs/mapped-types';
import { CreateBartDto } from './create-bart.dto';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateBartDto extends PartialType(CreateBartDto) {
    @IsString()
    @IsNotEmpty()
    @Length(1, 255) 
    name: string;
  
    @IsString()
    @IsOptional()
    @Length(1, 255) 
    description?: string;
}
