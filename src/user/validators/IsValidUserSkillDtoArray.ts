import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UserSkillDto } from '../dto';

@ValidatorConstraint({ name: 'IsValidUserSkillDtoArray', async: false })
export class IsValidUserSkillDtoArray implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (!value || !Array.isArray(value)) {
      return false;
    }

    // Check each item in the array
    for (const item of value) {
      if (!(item instanceof UserSkillDto)) {
        return false;
      }
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'skills must be a valid array of UserSkillDto objects';
  }
}
