import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';
import { CommonServiceService } from 'src/app/services/CommonService/common-service.service';
import { CustomValidations } from 'src/app/utilities/validation/validation';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss','../../../../../../assets/css/pages/login/classic/login-4.css','../../../../../../assets/plugins/global/plugins.bundle.css','../../../../../../assets/css/style.bundle.css']
})
export class AddArtistComponent implements OnInit {

  constructor(
    private CommonService: CommonServiceService,
    private adminService: AdminService,
    private fb: FormBuilder
  ) { }
  createArtistForms:FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.GroupForms('');
  }

  isValid(value:string){
    return this.CommonService.isValid(value,this.createArtistForms)
  }

  GroupForms(value:string) {
    return this.createArtistForms = this.fb.group({
       txtArtistName: this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(80)]),
       txtBio: this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(5000)]),
       txtActiveDate:this.fb.control(value,[Validators.required,Validators.minLength(4),Validators.maxLength(4)]),
     })
   }

  addArtist(){
  if(this.createArtistForms.invalid){
     alert("Invalid information")
      return;
    }else{
      let body:object = {
        artist_name:this.createArtistForms.get('txtArtistName')?.value,
        artist_biology:this.createArtistForms.get('txtBio')?.value,
        active_date:this.createArtistForms.get('txtActiveDate')?.value,
        amount_song:0
}
      
      this.adminService.addArtist(body).subscribe(
        res => {
          if(res.status===200){
           alert("Added successfully")
          }else{
           alert("Cannot add artist")
          }
        },
        err => {
         alert("Something missing, please waiting for",)
        }
      )
    }
  }

}
