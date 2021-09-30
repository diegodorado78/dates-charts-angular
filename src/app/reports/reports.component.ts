import { NgModule, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleService} from './../core/services/title.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit,OnDestroy {
  titleInput:string='';
  message:string;
  subscription: Subscription;
  constructor(private title:TitleService) { }

  ngOnInit(): void {
  this.subscription = this.title.currentTitle$.subscribe(message=>this.message=message)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  newTitle(titleInput:string) {
    this.title.setTitle(titleInput)
    console.log(this.title)
  }
}
