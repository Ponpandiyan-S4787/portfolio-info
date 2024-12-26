import { FormControl, FormGroup, Validators } from "@angular/forms";

export const signupForms=new FormGroup({
    signupUserId:new FormControl(),
    signupFname: new FormControl('',[Validators.required, Validators.minLength(8)]),
    signupLname: new FormControl('',[Validators.required, Validators.minLength(6)]),
    signupEmail: new FormControl('',[Validators.required,Validators.email]),
    signupPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    signupDOB:new FormControl('',[Validators.required]),
    signupGenter:new FormControl('',[Validators.required]),
    signupAddress:new FormControl('',[Validators.required]),
    signupCity:new FormControl('',[Validators.required]),
    signupState:new FormControl('',[Validators.required]),
    signupPostalCode:new FormControl('',[Validators.required, Validators.minLength(6)]),
})

export interface SignupFormModel{
    id:string,
    firstName: string ,
    lastName: string,
    email: string | any,
    password: string,
    dob:string,
    genter: string,
    address:string
    city:string
    state:string
    postalCode:string
}