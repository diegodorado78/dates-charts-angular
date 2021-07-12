import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoquillaComponent } from './components/boquilla/boquilla.component';
import {BoquillaRoutingModule } from './boquilla-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [BoquillaComponent],
  imports: [
    CommonModule,
    BoquillaRoutingModule,
    SharedModule,
  MaterialModule]
})
export class BoquillaModule { }
