import { DispatchStatusEnum, GenderEnum, UserLevelEnum, UserStatusEnum, UserTypeEnum } from '../../shared/entities';
import { IsEnum, IsString, IsDate, IsOptional, IsNotEmpty, Length, IsArray, Validate } from 'class-validator';
import { UserSkillDto } from './index'
import { IsValidUserSkillDtoArray } from '../validators/IsValidUserSkillDtoArray';

export class CreateUserDto {
    @IsEnum(UserLevelEnum)
    user_level: UserLevelEnum;

    @Length(1, 255) 
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @Length(1, 255) 
    @IsNotEmpty()
    @IsString()
    first_name: string;
        
    @IsEnum(GenderEnum)
    gender: GenderEnum;
    
    @Length(1, 255) 
    @IsNotEmpty()
    @IsString()
    address: string;

    @IsDate()
    birth_date: Date;

    @Length(1, 255) 
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
