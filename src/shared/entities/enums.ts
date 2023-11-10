export enum GenderEnum {
    MALE = 1,
    FEMALE = 2,
}

export enum UserStatusEnum{
    ACTIVE = 1,
    INACTIVE = 2,
}

export enum TeamStatusEnum{
    ACTIVE = 1,
    DISPATCHED = 2,
}

export enum DispatchStatusEnum{
    QUEUE = 1,
    DISPATCHED = 2,
    DECK = 3,
}

export enum UserLevelEnum{
    ADMIN = 1,
    DISPATCHER = 2,
    TEAM_LEADER = 3,
    FIELD_OPERATOR = 4,
}   

export enum UserTypeEnum{
    LGU_REGULAR = 11,
    LGU_CASUAL = 12,
    LGU_JOB_ORDER = 13,
    ACDV_CSO = 21, 
    ACDV_PO = 22, 
    ACDV_BART = 23, 
    ACDV_INDIVIDUAL = 24, 
    NA = 30,
}

export enum DistinctUserTypeEnum{
    LGU = 1,
    ACDV = 2,
    NA = 3,
}


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