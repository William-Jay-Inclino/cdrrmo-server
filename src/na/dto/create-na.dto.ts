import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateNaDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
