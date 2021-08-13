import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
    
      {
        path: 'winder',
        // canActivate: [AdminGuard],
        loadChildren: () => import('../reports/winder/winder.module').then(m => m.WinderModule)
      },
      {
        path: 'extrusor',
        // canActivate: [AdminGuard],
        loadChildren: () => import('../reports/extrusor/extrusor.module').then(m => m.ExtrusorModule)
      },
      {
        path: 'boquilla',
        // canActivate: [AdminGuard],
        loadChildren: () => import('../reports/boquilla/boquilla.module').then(m => m.BoquillaModule)
      },

],}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ReportsRoutingModule {}