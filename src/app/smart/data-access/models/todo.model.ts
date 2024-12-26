import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface TodoFormModel {
  id: number;
  fname: string | undefined | null;
  lname: string | undefined | null;
  email: string | undefined | null;
  password: string | undefined | null;
}

export const todoForms = new FormGroup({
  fname: new FormControl('', [Validators.required, Validators.minLength(8)]),
  lname: new FormControl('', [Validators.required, Validators.minLength(6)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8)]),
});
