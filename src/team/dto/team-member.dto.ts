import { IsNotEmpty, IsString } from "class-validator"

export class TeamMemberDto{

    @IsNotEmpty()
    @IsString()
    team_id: string 
    
    @IsNotEmpty()
    @IsString()
    member_id: string 

}