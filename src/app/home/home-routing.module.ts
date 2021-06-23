 import {NgModule} from '@angular/core';
 import {Routes, RouterModule } from '@angular/router';
 import { HomeComponent } from './components/home/home.component';

 const routes: Routes = [
 {
  path: '',
  component: HomeComponent
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
 export class HomeRoutingModule{}