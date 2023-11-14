import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreatePoDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
