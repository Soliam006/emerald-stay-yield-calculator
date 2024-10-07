// src/app/validators/non-negative.validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nonNegativeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return value < 0  ? { nonNegative: true} : null;
  };
}
