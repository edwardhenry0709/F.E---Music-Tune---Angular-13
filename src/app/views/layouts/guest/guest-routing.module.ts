import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { GuestComponent } from './guest.component';
import { MainComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { PlayListComponent } from './play-list/play-list.component';

const routes: Routes = [
  {
    path:"",
    component:GuestComponent,
   children:[
     {
      path:"", 
      component:MainComponent
     },
     {
       path:"playlist",
       component:PlayListComponent 
     },
     {
       path:"category",
       component:CategoryComponent
     },
     {
       path:"blog",
       component:BlogComponent
     },
     {
       path:"payment",
       component:PaymentComponent
     },
     {
       path:"artist",
       component:ArtistComponent
     }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
