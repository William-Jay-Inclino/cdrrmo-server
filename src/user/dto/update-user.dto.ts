import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UserLevelEnum, GenderEnum, UserStatusEnum, DispatchStatusEnum, UserTypeEnum } from '../../shared/entities';
import { IsEnum, Length, IsNotEmpty, IsString, IsDate, IsOptional, IsArray, Validate } from 'class-validator';
import { IsValidUserSkillDtoArray } from '../validators/IsValidUserSkillDtoArray';
import { UserSkillDto } from './user-skill.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsEnum(UserLevelEnum)
    user_level: UserLevelEnum;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsString()
    first_name: string;
        
    @IsEnum(GenderEnum)
    gender: GenderEnum;
    
    @IsNotEmpty()
    @IsString()
    address: string;

    @IsDate()
    birth_date: Date;

    @IsNotEmpty()
    @IsString()
    contact_no: string;

    @IsNotEmpty()
    @IsString()
    blood_type: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

    @IsEnum(UserStatusEnum)
    status: UserStatusEnum;

    @IsEnum(DispatchStatusEnum)
    dispatch_status: DispatchStatusEnum;

    @IsEnum(UserTypeEnum)
    type: UserTypeEnum;

    @IsOptional()
    @IsString()
    bart_id?: string;

    @IsOptional()
    @IsString()
    cso_id?: string;

    @IsOptional()
    @IsString()
    po_id?: string;

    @IsOptional()
    @IsString()
    na_id?: string;

    @IsArray()
    @Validate(IsValidUserSkillDtoArray)
    skills: UserSkillDto[];
}
