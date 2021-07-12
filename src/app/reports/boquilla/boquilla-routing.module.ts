 import {NgModule} from '@angular/core';
 import {Routes, RouterModule,PreloadAllModules } from '@angular/router';
 import { BoquillaComponent } from './components/boquilla/boquilla.component';

 const routes: Routes = [
 {
  path: '',
  component: BoquillaComponent
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
 export class BoquillaRoutingModule{
 };