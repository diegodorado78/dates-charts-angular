import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinderComponent } from './components/winder/winder.component';
import { WinderRoutingModule } from './winder-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [ WinderComponent],
  imports: [
        CommonModule,
        SharedModule,
        WinderRoutingModule,
        MaterialModule
  ]
})
export class WinderModule { }
