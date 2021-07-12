import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpisContentComponent } from './kpis-content/kpis-content.component';
import { CoreModule } from 'src/app/core/core.module';
import { KpiLineComponent } from './kpi-line/kpi-line.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { KpisLineSelectionComponent } from './kpis-line-selection/kpis-line-selection.component';
import { KpisRoutingModule } from './kpis-routing.module';



@NgModule({
  declarations: [
   KpisContentComponent,KpiLineComponent,KpisLineSelectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
 MaterialModule,
    CoreModule,
    KpisRoutingModule
  ],
  exports:[
    KpiLineComponent
  ]
})
export class KpisModule { }
