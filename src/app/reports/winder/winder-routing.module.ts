 import {NgModule} from '@angular/core';
 import {Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { Chart2Component } from './components/chart2/chart2.component';
 import { WinderComponent } from './components/winder/winder.component';

 const routes: Routes = [
 {
  path: '',
  component: WinderComponent,

 },
 {path: 'chart',
component: Chart2Component}
];
 @NgModule({
imports: [
 RouterModule.forChild(routes), // importa los child de la const routes
],
exports: [
 RouterModule // lo dejo disponible para otros modulos
]
 })
 export class WinderRoutingModule{
 };