import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExtrusorRoutingModule } from './extrusor-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ExtrusorComponent } from './components/extrusor/extrusor.component';
import { ChartE1Component } from './components/chart-e1/chart-e1.component';
import { ChartE2Component } from './components/chart-e2/chart-e2.component';
import { ChartE3Component } from './components/chart-e3/chart-e3.component';
import { ChartE4Component } from './components/chart-e4/chart-e4.component';



@NgModule({
  declarations: [ExtrusorComponent,  ChartE1Component, ChartE2Component, ChartE3Component, ChartE4Component],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ExtrusorRoutingModule
  ]
})
export class ExtrusorModule { }
