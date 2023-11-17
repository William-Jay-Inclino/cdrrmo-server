import { IsNotEmpty, IsString } from "class-validator"


export class EmergencyContactDto{
    @IsNotEmpty()
    @IsString()
    name: string 

    @IsNotEmpty()
    @IsString()
    relationship: string 

    @IsNotEmpty()
    @IsString()
    mobile: string
}