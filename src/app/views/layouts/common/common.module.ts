import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ErrorMessageComponent } from './Components/error-message/error-message.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorMessageComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorMessageComponent,
    NotFoundComponent,

  ]
})
export class SharedModule { }
