import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Artists, CreateSong, ResponseCreateAndUpdateSong } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin/admin.service';
import { CommonServiceService } from 'src/app/services/CommonService/common-service.service';
import { CustomValidations } from 'src/app/utilities/validation/validation';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss','../../../../../../assets/css/pages/login/classic/login-4.css','../../../../../../assets/plugins/global/plugins.bundle.css','../../../../../../assets/css/style.bundle.css']
})
export class AddSongComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private CommonService:CommonServiceService,
    private adminService:AdminService
  ) { }
  createSongForms:FormGroup = new FormGroup({});

  ngOnInit(): void {
   this.GroupForms('');
   this.getArtist();
  }

  GroupForms(value:string) {
   return this.createSongForms = this.fb.group({
      txtMusicName: this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(80),CustomValidations.validOnlyAlphabet]),
      txtURL: this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(10000)]),
      slArtist:this.fb.control('',[Validators.required]),
      txtPhoto:this.fb.control(value,[Validators.required,Validators.minLength(1),Validators.maxLength(10000)]),
    
    })
  }

  isValid(value:string){
    return this.CommonService.isValid(value,this.createSongForms);
  }

  addSong(){
    if(this.createSongForms.invalid){
     alert("Invalid information")
      return;
    }else{
      let body:CreateSong = {
      
        music_name:this.createSongForms.get('txtMusicName')?.value,
        url:this.createSongForms.get('txtURL')?.value,
        artists_id:this.createSongForms.get('slArtist')?.value,
        photo:this.createSongForms.get('txtPhoto')?.value
}
      
      this.adminService.createSongs(body).subscribe(
        res => {
          if(res.status===200){
           alert("Added successfully")
          }else{
           alert("Cannot add songs")
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
