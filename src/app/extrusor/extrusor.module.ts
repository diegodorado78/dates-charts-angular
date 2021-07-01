import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrusorComponent } from './components/extrusor/extrusor.component';
import { SharedModule } from '../shared/shared.module';
import {ExtrusorRoutingModule } from './extrusor-rounting.module';
import { MaterialModule } from '../material/material.module';



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
