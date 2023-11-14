import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateBartDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
