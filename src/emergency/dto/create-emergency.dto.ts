import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';


export class CreateEmergencyDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsOptional()
    description?: string;
}
