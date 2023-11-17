import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'IsValidEmergencyContactDtoArray', async: false })
export class IsValidEmergencyContactDtoArray implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const requiredProperties = ['name', 'relationship', 'mobile'];

    const allItemsValid = value.every((item, index) => {
      const isValid = this.isInstanceOfEmergencyContactDto(item, requiredProperties);
      if (!isValid) {
        throw new Error(`Invalid EmergencyContactDto at index ${index}. Please provide 'name', 'relationship', and 'mobile'.`);
      }
      return true;
    });

    return allItemsValid;
  }

  defaultMessage(args: ValidationArguments) {
    return 'EmergencyContact must be a valid array of objects with properties: name, relationship, and mobile.';
  }

  private isInstanceOfEmergencyContactDto(item: any, requiredProperties: string[]): boolean {
    return item && typeof item === 'object' && requiredProperties.every((prop) => prop in item);
  }
}

