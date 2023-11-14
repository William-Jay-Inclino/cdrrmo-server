import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateCsoDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
