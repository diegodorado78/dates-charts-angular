 import {NgModule} from '@angular/core';
 import {Routes, RouterModule } from '@angular/router';
import { KpisLineSelectionComponent } from 'src/app/kpis/kpis-line-selection/kpis-line-selection.component';
 import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from '../../reports/reports.component';
 const routes: Routes = [
 {
  path: '',
  component: HomeComponent
 },
 {
  path: 'kpis',
  component: KpisLineSelectionComponent,
  loadChildren: () => import('../../kpis/kpis.module').then(m => m.KpisModule)

 },
 {
  path: 'reports',
  component: ReportsComponent
 },
];
 @NgModule({
imports: [
 RouterModule.forChild(routes), // importa los child de la const routes
],
exports: [
 RouterModule // lo dejo disponible para otros modulos
]
 })
 export class HomeRoutingModule{}