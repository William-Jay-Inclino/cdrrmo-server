import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'IsValidUserSkillDtoArray', async: false })
export class IsValidUserSkillDtoArray implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    
    // Ensure value is an array
    // if (!Array.isArray(value)) {
    //   console.log('false1');
    //   return false;
    // }

    // Define the required properties for UserSkillDto
    const requiredProperties = ['training_skill_id'];

    // Check if every item in the array is an instance of UserSkillDto
    const allItemsValid = value.every((item) => this.isInstanceOfUserSkillDto(item, requiredProperties));

    if (allItemsValid) {
      return true;
    } else {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return 'skills must be a valid array of UserSkillDto objects';
  }

  private isInstanceOfUserSkillDto(item: any, requiredProperties: string[]): boolean {
    // Add logic here to determine if 'item' is an instance of UserSkillDto
    return (
      item &&
      typeof item === 'object' &&
      requiredProperties.every((prop) => prop in item)
    );
  }
}
