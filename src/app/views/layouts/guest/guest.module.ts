import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { PlayListComponent } from './play-list/play-list.component';
import { SharedModule } from '../common/common.module';
import { MainComponent } from './home/home.component';
import { GuestComponent } from './guest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [
    GuestComponent,
    PaymentComponent,
    PlayListComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    CategoryComponent,
    ArtistComponent,
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GuestModule { }
