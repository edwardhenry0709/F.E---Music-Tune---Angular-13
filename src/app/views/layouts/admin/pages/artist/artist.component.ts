import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss','../../../../../../assets/css/pages/login/classic/login-4.css','../../../../../../assets/plugins/global/plugins.bundle.css','../../../../../../assets/css/style.bundle.css']
})
export class ArtistComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private router:Router
  ) { }
  titleArray:string[]=['Artists id','Artist Name','Active Date','Actions']
  listArtistsArray:any[]=[];
  ngOnInit(): void {
    this.getListArtists();
  }

  details(id:string){
    return this.router.navigateByUrl(`/panel/details-artist/${id}`)
  }

  deleteArtist(id:string){
    this.adminService.deleteArtist(id).subscribe(
      res => {
        // console.log(res);
        
        if(res.status ===200){
          alert("Deleted has been successfully")
          this.getListArtists()
        }
        else {
          alert("Could not delete this artist")
        } 
      }
    )
  }

  getListArtists(){
    this.adminService.getArtist().subscribe(
      res => {
        if(res.status===200){
          this.listArtistsArray = res.data
        }
        else{
          alert("Cannot get")
        }
      }
    )
  }

}
