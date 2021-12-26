import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss','../../../../../assets/main pages/css/owl.carousel.min.css',
  '../../../../../assets/main pages/css/slicknav.min.css',
  '../../../../../assets/main pages/css/style.css']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  play(){
    let audio = new Audio();
    audio.src = "../../../assets/song.mp3";
    audio.load();
    audio.play();
  }

}
