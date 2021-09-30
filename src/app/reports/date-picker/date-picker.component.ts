import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleService} from './../../core/services/title.service';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit,OnDestroy {
  pickerStart = new Date('2020-01-01');
  firstDate:string;
  pickerFinish = new Date('2021-06-01');//necesary as a start point for date picker  
  //// ISO 8601 Extended format
//`YYYY-MM-DDTHH:mm:ss.sssZ`
  lastDate:string;
  message:string='Chart';
  subscription: Subscription;
  constructor(private title:TitleService) { }

  ngOnInit(): void {
    this.subscription = this.title.currentTitle$.subscribe(message => this.message = message);
    // console.log(this.pickerStart)
    // console.log(this.pickerFinish)
  }
  
  showData(){
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
}
