import { IsEnum } from "class-validator";

export enum TableEnum{
    TRAINING_SKILL = 'training-skill',
    EMERGENCY = 'emergency',
    BART = 'bart',
    CSO = 'cso',
    PO = 'po',
    NA = 'na',
    USER = 'user',
    TEAM = 'team',
    TEAM_MEMBER = 'team-member',
    USER_SKILL = 'user-skill',
    SKILL_CERTIFICATE = 'skill-certificate',
}


export class TableSeederDto {
    @IsEnum(TableEnum)
    tbl_name: TableEnum;
}