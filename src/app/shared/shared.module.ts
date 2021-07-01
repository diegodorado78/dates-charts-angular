import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuIconComponent } from './components/menu-icon/menu-icon.component';




@NgModule({
  declarations: [
    HeaderComponent,
    MenuIconComponent],
  exports:[
    HeaderComponent,
    MenuIconComponent
  ],
   imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
