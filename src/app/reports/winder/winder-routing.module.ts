 import {NgModule} from '@angular/core';
 import {Routes, RouterModule,PreloadAllModules } from '@angular/router';
 import { WinderComponent } from './components/winder/winder.component';

 const routes: Routes = [
 {
  path: '',
  component: WinderComponent,

 }
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