import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KpisContentComponent } from './components/kpis-content/kpis-content.component';
import { KpisComponent } from './kpis.component';

const routes: Routes = [
  {
    path: '',
    component: KpisComponent
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