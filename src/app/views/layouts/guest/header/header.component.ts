import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
  '../../../../../assets/main pages/css/owl.carousel.min.css',
  '../../../../../assets/main pages/css/slicknav.min.css',
  '../../../../../assets/main pages/css/style.css'
]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
