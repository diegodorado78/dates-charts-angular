import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule,
    MaterialModule,
    RouterModule
  ],
  exports:[ReportsComponent,],
})
export class ReportsModule { }
