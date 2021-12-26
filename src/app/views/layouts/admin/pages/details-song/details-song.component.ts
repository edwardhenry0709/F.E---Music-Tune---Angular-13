import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseCreateAndUpdateSong, Artists, CreateSong } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin/admin.service';
import { CommonServiceService } from 'src/app/services/CommonService/common-service.service';
import { CustomValidations } from 'src/app/utilities/validation/validation';

@Component({
  selector: 'app-details-song',
  templateUrl: './details-song.component.html',
  styleUrls: ['./details-song.component.scss','../../../../../../assets/css/pages/login/classic/login-4.css','../../../../../../assets/plugins/global/plugins.bundle.css','../../../../../../assets/css/style.bundle.css']
})
export class DetailsSongComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private CommonService:CommonServiceService,
    private adminService:AdminService,
    private route: ActivatedRoute,
  ) { }
  detailsSongForms:FormGroup = new FormGroup({});
  id:string='';
  songDetails:any
  artists_id:string='';
  ngOnInit(): void {
  this.GroupForms('');
   this.getArtist();
   this.route.params.subscribe(params => {
    this.id = params['id'];
    this.adminService.getDetailSong(params.id).subscribe(
      res => {
        if(res.status===200){
          this.songDetails=res.data;
            this.detailsSongForms = this.fb.group({
              txtMusicName: this.fb.control(this.songDetails['music_name'],[Validators.required,Validators.minLength(1),Validators.maxLength(80),CustomValidations.validOnlyAlphabet]),
              txtURL: this.fb.control(this.songDetails['url'],[Validators.required,Validators.minLength(1),Validators.maxLength(10000)]),
              slArtist:this.fb.control(this.songDetails['artists_id'],[Validators.required]),
              txtPhoto:this.fb.control(this.songDetails['photo'],[Validators.required,Validators.minLength(1),Validators.maxLength(10000)]),
            
            })
          
          
      }else{
        alert("Cannot get details from song details")
        }
      },
      err => {
       
      }
    )
    
 });
  }

  GroupForms(value:string) {
   return this.detailsSongForms = this.fb.group({
      txtMusicName: this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(80),CustomValidations.validOnlyAlphabet]),
      txtURL: this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(10000)]),
      slArtist:this.fb.control('',[Validators.required]),
      txtPhoto:this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(10000)]),
    
    })
  }

  isValid(value:string){
    return this.CommonService.isValid(value,this.detailsSongForms);
  }

  updateSong(){
    if(this.detailsSongForms.invalid){
     alert("Invalid information")
      return;
    }else{
      let body:CreateSong = {
        music_name:this.detailsSongForms.get('txtMusicName')?.value,
        url:this.detailsSongForms.get('txtURL')?.value,
        artists_id:this.detailsSongForms.get('slArtist')?.value,
        photo:this.detailsSongForms.get('txtPhoto')?.value
}
      
      this.adminService.updateSong(this.id,body).subscribe(
        res => {
          if(res.status===200){
           alert("Updated song successfully")
          }else{
           alert("Cannot update songs")
          }
        },
        err => {
         alert("Something missing, please waiting for",)
        }
      )
    }
  }

  artistArray:Artists[] = [];
  getArtist(){
    this.adminService.getArtist()
    .subscribe(
      res => {
        if(res.status===200){
          this.artistArray =res.data
        }else{
          alert("Cannot get data")
        }
      },
      err => {
        alert("Something missing, please waiting for");
      }
    )
  }

}
