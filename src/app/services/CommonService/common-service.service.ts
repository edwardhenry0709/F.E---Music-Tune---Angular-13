import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  isValid(field:string,form:FormGroup):string {
    if(form.get(field)?.invalid  && form.get(field)?.touched){
      return 'is-invalid'
    }else if (!form.get(field)?.invalid  && form.get(field)?.touched && form.get(field)?.dirty){
      return 'is-valid'
    }else {
      return ''
    }
   }

   setAttributes(ele:any,attrs:any){
    for(let key in attrs){
      ele.setAttribute(key,attrs[key])
    }
  }

  tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    console.log(expiry);
    
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  logged(){
    return sessionStorage.getItem('access-token') !== null || sessionStorage.getItem('token') !==undefined
  }
}
