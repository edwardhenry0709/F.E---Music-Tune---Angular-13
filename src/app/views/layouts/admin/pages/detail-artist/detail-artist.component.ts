import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { CommonServiceService } from 'src/app/services/CommonService/common-service.service';
import { CustomValidations } from 'src/app/utilities/validation/validation';

@Component({
  selector: 'app-detail-artist',
  templateUrl: './detail-artist.component.html',
  styleUrls: ['./detail-artist.component.scss','../../../../../../assets/css/pages/login/classic/login-4.css','../../../../../../assets/plugins/global/plugins.bundle.css','../../../../../../assets/css/style.bundle.css']
})
export class DetailArtistComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private CommonService:CommonServiceService,
    private adminService:AdminService,
    private route: ActivatedRoute,
  ) { }
  detailsArtist:any;
  detailsArtistForms:FormGroup = new FormGroup({});
  id:string='';
    ngOnInit(): void {
      this.GroupForms('');
       this.route.params.subscribe(params => {
        this.id = params['id'];
        this.adminService.getDetailsArtist(params.id).subscribe(
          res => {
            console.log(res);
            
            if(res.status===200){
              this.detailsArtist=res.data;
                this.detailsArtistForms = this.fb.group({
                  txtArtistName: this.fb.control(this.detailsArtist['artist_name'],[Validators.required,Validators.minLength(1),Validators.maxLength(80),CustomValidations.validOnlyAlphabet]),
                  txtBio: this.fb.control(this.detailsArtist['artist_biology'],[Validators.required,Validators.minLength(1),Validators.maxLength(10000)]),
                  txtActiveDate:this.fb.control(this.detailsArtist['active_date'],[Validators.required]),
                  txtAmountSong:this.fb.control(this.detailsArtist['amount_song']),
                
                })
              
              
          }else{
            alert("Cannot get details from artist details")
            }
          },
          err => {
           
          }
        )
        
     });
    }
    updateArtist(){
      if(this.detailsArtistForms.invalid){
        alert("Invalid information")
         return;
       }else{
         let body:object = {
          artist_name:this.detailsArtistForms.get('txtArtistName')?.value,
          artist_biology:this.detailsArtistForms.get('txtBio')?.value,
          active_date:this.detailsArtistForms.get('txtActiveDate')?.value,
   }
         
         this.adminService.updateArtist(this.id,body).subscribe(
           res => {
             if(res.status===200){
              alert("Updated successfully")
             }else{
              alert("Cannot update this artist")
             }
           },
           err => {
            alert("Something missing, please waiting for",)
           }
         )
       }
    }
  GroupForms(value:string) {
    return this.detailsArtistForms = this.fb.group({
      txtArtistName: this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(80),CustomValidations.validOnlyAlphabet]),
      txtBio: this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(10000)]),
      txtActiveDate:this.fb.control(value,[Validators.required]),
      txtAmountSong:this.fb.control(value),
     
     })
   }
 
   isValid(value:string){
     return this.CommonService.isValid(value,this.detailsArtistForms);
   }
}
