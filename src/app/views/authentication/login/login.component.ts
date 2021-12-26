import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonServiceService } from 'src/app/services/CommonService/common-service.service';
import { CustomValidations } from 'src/app/utilities/validation/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../../../assets/css/pages/login/classic/login-4.css','../../../../assets/plugins/global/plugins.bundle.css','../../../../assets/css/style.bundle.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private CommonService: CommonServiceService,
    private fb:FormBuilder,
    private router:Router,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      txtEmail:this.fb.control('',[Validators.required,Validators.minLength(2),Validators.maxLength(50),CustomValidations.validEmail]),
      txtPassword:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)])
    })
   
  }
  loginForm: FormGroup=new FormGroup({});

  isValid(value:string){
    return this.CommonService.isValid(value,this.loginForm);
  }

  login():void{
    // alert("alo nghe chưa")
    let body:object = {
      username:this.loginForm.get('txtEmail')?.value,
      password:this.loginForm.get('txtPassword')?.value
    }
    // console.log(body);
    
    if(this.loginForm.invalid){
      return;
    }else {
      if (this.loginForm.valid){
        // this.spinner.show();
        this.auth.login(body).subscribe(
          res => {
            console.log(res);
            
            if(res.status===200 && res.data.roles[0]==="admin" ){
              sessionStorage.setItem('data',JSON.stringify(res.data))
              sessionStorage.setItem('access-token',res.data.token)
              // this.spinner.hide();
              // this.message.alertMessage('Success !',"Đăng nhập thành công!","success");
              this.router.navigate(['/panel/dashboard'])
            }
            
            else{
              // this.spinner.hide();
              // this.message.alertMessage("OOPS","Tài Khoản Của Bạn Không Tồn Tại","error")
            }
          },
          err=>{}
        )
      }
      
    }

  }

}
