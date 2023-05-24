import { FormControl } from '@angular/forms';
import { Validator, ValidationRule } from 'fluent-validation';

export class UserValidator extends Validator {
  errorMessages = {
    required: 'First Name is required',
    email: 'Invalid email format'
  };

  constructor() {
    super();

    this['ruleFor']('firstName')
      .notEmpty().withMessage(this.errorMessages.required);

    this['ruleFor']('email')
      .notEmpty().withMessage(this.errorMessages.required)
      .email().withMessage(this.errorMessages.email);

    // Agrega más reglas de validación según tus requisitos
  }
}
