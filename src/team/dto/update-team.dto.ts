import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamDto } from './create-team.dto';
import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { TeamStatusEnum } from '../../shared/entities';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {

    @IsNotEmpty()
    @IsString()
    team_leader_id: string

    @IsNotEmpty()
    @IsString()
    @Length(1, 255) 
    name: string
    

    @IsNotEmpty()
    @IsEnum(TeamStatusEnum)
    status: TeamStatusEnum;

}
