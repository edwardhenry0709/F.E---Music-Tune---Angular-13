import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './views/layouts/common/Components/not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import('./views/layouts/guest/guest.module')
    .then(m=>m.GuestModule)
  },
  {
    path:"",
    loadChildren:()=>import('./views/authentication/authentication.module')
    .then(m=>m.AuthenticationModule)
  },
  {
    path:"",
    loadChildren:()=>import('./views/layouts/admin/admin.module')
    .then(m=>m.AdminModule)
  },
 
  {
    path:'404',
    component:NotFoundComponent,
    data:{
      title:"Not Found 404"
        }
  },
  {
    path:"**",
    redirectTo:"404",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,scrollPositionRestoration: 'enabled'}),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
