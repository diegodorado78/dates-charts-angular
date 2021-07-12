 import {NgModule} from '@angular/core';
 import {Routes, RouterModule,PreloadAllModules } from '@angular/router';
 import { ExtrusorComponent } from './components/extrusor/extrusor.component';

 const routes: Routes = [
 {
  path: '',
  component: ExtrusorComponent
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
 export class ExtrusorRoutingModule{
 };