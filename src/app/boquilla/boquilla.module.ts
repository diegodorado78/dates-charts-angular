import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoquillaComponent } from './components/boquilla/boquilla.component';
import { SharedModule } from '../shared/shared.module';
import {BoquillaRoutingModule } from './boquilla-routing.module';


@NgModule({
  declarations: [BoquillaComponent],
  imports: [
    CommonModule,
    BoquillaRoutingModule,
    SharedModule]
})
export class BoquillaModule { }
