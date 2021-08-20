import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoquillaComponent } from './components/boquilla/boquilla.component';
import {BoquillaRoutingModule } from './boquilla-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { Chart1Component } from './components/chart1/chart1.component';
import { Chart2Component } from './components/chart2/chart2.component';
import { Chart3Component } from './components/chart3/chart3.component';


@NgModule({
  declarations: [BoquillaComponent, Chart1Component, Chart2Component, Chart3Component],
  imports: [
    CommonModule,
    BoquillaRoutingModule,
    SharedModule,
  MaterialModule],
  exports:[
    BoquillaComponent
  ]
})
export class BoquillaModule { }
