 import {NgModule} from '@angular/core';
 import {Routes, RouterModule,PreloadAllModules } from '@angular/router';
 import { DieComponent } from './components/die/die..component';

 const routes: Routes = [
 {
  path: '',
  component: DieComponent
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
 export class DieRoutingModule{
 };