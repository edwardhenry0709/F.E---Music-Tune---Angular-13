import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  constructor() { }

  @Input('control') control:any;
  @Input('controlName') controlName:any;

  ngOnInit(): void {
  }

  get message(){
    for(let err in this.control.errors){  
      if(this.control.dirty || this.control.touched ){
        return this.getErrorMessage(err,this.control.errors[err]);
      }
    }
  }

  getErrorMessage(err:string,value:any){
  let message:any = {
      'required' :`${this.controlName} is required!`,
      'minlength':`The minlength of ${this.controlName} should be more than or equal ${value.requiredLength} characters`,
      'maxlength':`The maxlength of ${this.controlName} should be less than or equal ${value.requiredLength} kí tự`,
      'invalidEmail':`Your ${this.controlName} is invalid, Make sure ${this.controlName} should has .com and @`,
      'validMediumPassword':`${this.controlName} is medium`,
      'validWeakPassword':`${this.controlName} is weak password`,
      'invalidConfirmPassword':`${this.controlName} is invalid`,
      'invalidPhoneNumber':`${this.controlName} should be positive number`,
      'invalidAlphabet':`${this.controlName} should be in alphabet`,
      'invalidNumberic':`${this.controlName} should be numberic`
    }
    return message[err]
  }

}
