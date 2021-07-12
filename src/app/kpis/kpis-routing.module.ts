import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KpisContentComponent } from './kpis-content/kpis-content.component';
import { KpisLineSelectionComponent } from './kpis-line-selection/kpis-line-selection.component';

const routes: Routes = [
  {
    path: '',
    component: KpisLineSelectionComponent
  },
  {
    path: ':id',
    component: KpisContentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class KpisRoutingModule {}