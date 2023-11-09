import { IsNotEmpty, IsString } from "class-validator"


export class UserSkillDto{
    @IsNotEmpty()
    @IsString()
    user_id: string
    
    @IsNotEmpty()
    @IsString()
    training_skill_id: string 
}