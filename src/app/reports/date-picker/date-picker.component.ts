import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { TitleService} from '@services/title.service';
import {Response} from '../../response.model'

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit,OnDestroy {
   // ISO 8601 Extended format
  //`YYYY-MM-DDTHH:mm:ss.sssZ`
  subscription: Subscription
  startDate:any;
  endDate:any;
  minDate= new Date(2018/1/1);
  maxDate= new Date();
  message$:string;
  constructor(private titleService:TitleService) {
  }
  ngOnInit(): void {
  // this.message$ recieves the async value  from the service
    this.subscription = this.titleService.currentTitle$.subscribe(message=>this.message$=message)
  }
  
  ngOnDestroy(){
     this.subscription.unsubscribe();
  }
  
 
 
}
