
import { FormControl } from '@angular/forms';
import { Validator, ValidationRule } from 'fluent-validation';

export class UserValidator extends Validator {
    constructor() {
      super();
  
      this['ruleFor']('firstName')
        .notEmpty().withMessage('El nombre es obligatorio.');
  
      this['ruleFor']('email')
      .notEmpty().withMessage('El correo electrónico es obligatorio.')
      .email().withMessage('El formato del correo electrónico no es válido.');
  
      // Agrega más reglas de validación según tus requisitos
    }
  }
  