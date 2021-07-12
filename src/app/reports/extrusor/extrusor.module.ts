import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExtrusorRoutingModule } from './extrusor-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ExtrusorComponent } from './components/extrusor/extrusor.component';



@NgModule({
  declarations: [ExtrusorComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ExtrusorRoutingModule
  ]
})
export class ExtrusorModule { }
