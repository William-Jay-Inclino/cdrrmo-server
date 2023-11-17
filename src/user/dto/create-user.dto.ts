import { DispatchStatusEnum, GenderEnum, UserLevelEnum, UserStatusEnum, UserTypeEnum } from '../../shared/entities';
import { IsEnum, IsString, IsDate, IsOptional, IsNotEmpty, Length, IsArray, Validate } from 'class-validator';
import { IsValidUserSkillDtoArray, IsValidEmergencyContactDtoArray } from '../validators';
import { Transform } from 'class-transformer';
import { EmergencyContactDto, UserSkillDto } from '.';

export class CreateUserDto {
    @IsNotEmpty()
    @IsEnum(UserLevelEnum)
    user_level: UserLevelEnum;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsString()
    user_name: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    first_name: string;
        
    @IsNotEmpty()
    @IsEnum(GenderEnum)
    gender: GenderEnum;
    
    @IsNotEmpty()
    @IsString()
    address: string;

    @Transform(({ value }) => new Date(value))
    @IsDate()
    birth_date: Date;

    @IsNotEmpty()
    @IsString()
    contact_no: string;

    @IsNotEmpty()
    @IsString()
    blood_type: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

    @IsNotEmpty()
    @IsEnum(UserStatusEnum)
    status: UserStatusEnum;

    @IsOptional()
    @IsEnum(DispatchStatusEnum)
    dispatch_status?: DispatchStatusEnum;

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

    @IsArray()
    @Validate(IsValidEmergencyContactDtoArray)
    emergencyContacts: EmergencyContactDto[];

}
