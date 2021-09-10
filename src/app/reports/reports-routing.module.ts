import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
},
 {
  path: 'die',
  // canActivate: [AdminGuard],
  loadChildren: () => import('./die/die.module').then(m => m.DieModule),
 },
 {
  path: 'winder',
  // canActivate: [AdminGuard],
  loadChildren: () => import('../reports/winder/winder.module').then(m => m.WinderModule)
 },
 {
  path: 'extrusor',
 // canActivate: [AdminGuard],
 loadChildren: () => import('../reports/extrusor/extrusor.module').then(m => m.ExtrusorModule)
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
export class ReportsRoutingModule {}