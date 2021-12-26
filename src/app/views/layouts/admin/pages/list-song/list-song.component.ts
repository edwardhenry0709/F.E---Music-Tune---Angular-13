import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss','../../../../../../assets/css/pages/login/classic/login-4.css','../../../../../../assets/plugins/global/plugins.bundle.css','../../../../../../assets/css/style.bundle.css']
})
export class ListSongComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  titleArray:string[]=['Artists Name','Music Name','Song URL','Actions']
  
  ngOnInit(): void {
    this.getArtist();
    setInterval(() =>{this.getListSong()},4000)
  }
  
  listSongsArray:any[]=[]
  getListSong(){
    this.adminService.getListSong()
    .subscribe(
      res => {
        if(res.status === 200){
          this.listSongsArray = res.data
          for (let i = 0; i < this.listSongsArray.length; i++) {
            for (let j = 0; j < this.artistArray.length; j++) {
              if(this.listSongsArray[i].artists_id===this.artistArray[j]._id){
                this.listSongsArray.concat(this.artistArray[i].artist_name)
                console.log(this.listSongsArray);
                
              }else{
                this.listSongsArray
              }
            }
          }
        }
        else {
          alert("Cannot Get List Songs")
        }
      }, 
      err => {}
    )
  }
  artistArray:any[]=[]
  getArtist(){
    this.adminService.getArtist().subscribe(
      res => {
        this.artistArray = res.data
      }
    )
  }

  details(id:String){
    return this.router.navigateByUrl(`/panel/details-song/${id}`)
  }

  deleteSong(id:string){
    this.adminService.deleteSong(id).subscribe(
      res => {
       if(res.status===200){
         alert("Deleted Success");
         this.getListSong();
       }else{
         alert("Delete has failed!, Try again later")
       }
      }
    )
  }
}
