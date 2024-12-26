import { FormControl, FormGroup } from "@angular/forms"

export interface TodoEditModalInterface{
    idx:number,
    fname: string
    lname: string
    email: string
    password: string
}

// export const todoEdittedForm=new FormGroup({
//     edittedFname:new FormControl(),
//     edittedLname:new FormControl(),
//     edittedEmail:new FormControl(),
// })