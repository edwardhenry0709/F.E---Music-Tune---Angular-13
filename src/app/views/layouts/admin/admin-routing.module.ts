import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/app/utilities/guard/guard.guard';
import { AdminComponent } from './admin.component';
import { AddArtistComponent } from './pages/add-artist/add-artist.component';
import { AddSongComponent } from './pages/add-song/add-song.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailArtistComponent } from './pages/detail-artist/detail-artist.component';
import { DetailsSongComponent } from './pages/details-song/details-song.component';
import { ListSongComponent } from './pages/list-song/list-song.component';

const routes: Routes = [
  {
    path:"panel",
    component:AdminComponent,
    children: [
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"add-song",
        component:AddSongComponent
      },
      {
        path:'details-song/:id',
        component:DetailsSongComponent
      },
      {
        path:"management-songs",
        component:ListSongComponent
      },
      {
        path:"management-artists",
        component:ArtistComponent
      },
      {
        path:"add-artist",
        component:AddArtistComponent
      },
      {
        path:"details-artist/:id",
        component:DetailArtistComponent
      },
    ],
    canActivate:[GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
