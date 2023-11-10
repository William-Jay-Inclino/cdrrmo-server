import { IsNotEmpty, IsString } from "class-validator"


export class UserSkillDto{
    @IsNotEmpty()
    @IsString()
    training_skill_id: string 
}