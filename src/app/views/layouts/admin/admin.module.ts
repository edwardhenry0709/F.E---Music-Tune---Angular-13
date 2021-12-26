import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddSongComponent } from './pages/add-song/add-song.component';
import { DetailsSongComponent } from './pages/details-song/details-song.component';
import { ListSongComponent } from './pages/list-song/list-song.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { DetailsUserComponent } from './pages/details-user/details-user.component';
import { SharedModule } from '../common/common.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistComponent } from './pages/artist/artist.component';
import { AddArtistComponent } from './pages/add-artist/add-artist.component';
import { DetailArtistComponent } from './pages/detail-artist/detail-artist.component';


@NgModule({
  declarations: [
    AddSongComponent,
    DetailsSongComponent,
    ListSongComponent,
    DashboardComponent,
    UsersComponent,
    DetailsUserComponent,
    AdminComponent,
    ArtistComponent,
    AddArtistComponent,
    DetailArtistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
