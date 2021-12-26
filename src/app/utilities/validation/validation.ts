import { AbstractControl } from "@angular/forms";

export class CustomValidations {
    static validEmail(text: AbstractControl){
        let value=text.value;
        const regexEmail = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        if(regexEmail.test(value)){
            return null;
        }
        return {invalidEmail: true};
    }

    static validOnlyNumberic(number: AbstractControl){
        let value=number.value;
        const regexNumberic = '^[0-9]+$';
        if(value.match(regexNumberic)){
            return null;
        }
        return{invalidNumberic:true};
    }
    static validNumberic(number: AbstractControl){
        let value=number.value;
        const regexNumberic = '^[0-9]+$';
        if(value.test(regexNumberic)){
            return null;
        }
        return{invalidNumberic:true};
    }

    static validOnlyAlphabet(string: AbstractControl){
        let value=string.value;
        const regexAlphabet ='[A-Za-z]+$';
        if(value.match(regexAlphabet)){
            return null;
        }
        return {invalidAlphabet: true};
    }

    static validPhoneNumber(phonenumber: AbstractControl){
        let value=phonenumber.value;
        const regexPhoneNumber=/(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        if(!value.match(regexPhoneNumber)){
            return {invalidPhoneNumber : true};
        }
        return null;
    }

    static validPassword(password: AbstractControl){
        let value = password.value;
        const regexStrongPassword ='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})';
        const regexMediumPassword ='((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))';
        if(value.match(regexStrongPassword)){
            return null
        }else if (value.match(regexMediumPassword)){
            return {validMediumPassword : true}
        }else {
            return {validWeakPassword : true}
        }
    }

    static matchPassword(pass: AbstractControl) {
        let password = pass.get('txtPassword')?.value;
        let confirmPassword = pass.get('txtConfirmPassword')?.value;
         if(password !== confirmPassword) {
           return pass.get('txtConfirmPassword')?.setErrors( {invalidConfirmPassword: true} )
         } else {
             return null
         }
     }
}