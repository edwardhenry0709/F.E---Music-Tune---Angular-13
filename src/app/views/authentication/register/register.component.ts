import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonServiceService } from 'src/app/services/CommonService/common-service.service';
import { CustomValidations } from 'src/app/utilities/validation/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../../../../assets/css/pages/login/classic/login-4.css','../../../../assets/plugins/global/plugins.bundle.css','../../../../assets/css/style.bundle.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private CommonService: CommonServiceService,
    private fb:FormBuilder,
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.registerForms = this.fb.group({
      txtFullname:this.fb.control('',[Validators.required,Validators.minLength(2),Validators.maxLength(50),CustomValidations.validOnlyAlphabet]),
      txtEmail:this.fb.control('',[Validators.required,Validators.minLength(2),Validators.maxLength(50),CustomValidations.validEmail]),
      txtPassword:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30),CustomValidations.validPassword]),
      txtConfirmPassword:this.fb.control('',[Validators.minLength(5),Validators.maxLength(50),Validators.required,CustomValidations.validPassword]),
      rdCheckbox:this.fb.control(false,[Validators.requiredTrue])
    },{validator:CustomValidations.matchPassword})
   
  }
  registerForms: FormGroup=new FormGroup({});

  isValid(value:string){
    return this.CommonService.isValid(value,this.registerForms);
  }

  register():void{
    let body:object = {
      fullname:this.registerForms.get('txtFullname')?.value,
      username:this.registerForms.get('txtEmail')?.value,
      password:this.registerForms.get('txtPassword')?.value,
    }

    if(this.registerForms.invalid){
      return;
    }else {
      if (this.registerForms.valid){
        // this.spinner.show();
        this.auth.register(body).subscribe(
          res => {
            if(res.status===200){
              sessionStorage.setItem('access-token',res.data.token)
              // this.spinner.hide();
              // this.message.alertMessage('Success !',"Đăng kí thành công!","success");
              this.router.navigate(['/auth/sign-in']);
            }
            else{
              // this.spinner.hide();
              // this.message.alertMessage("OOPS","Tài Khoản Đã Tồn Tại","error")
            }
          },
          err => {
            if(err){
              // this.spinner.hide();
              // this.message.alertMessage("Lỗi hệ thống, vui lòng thử lại","","error")
            }
          }
        )
      }
      
    }
  }

}
