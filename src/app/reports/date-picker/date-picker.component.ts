import { DatesService } from './../../core/services/dates.service';
import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { TitleService} from '@services/title.service';
import { Dates } from '../../date.model';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit,OnDestroy {
  subscription: Subscription
  dateData$:Observable<Dates>;
  // minDate= new Date(2018/1/1);
  // maxDate= new Date();
  newDate:Dates;
  startDate:string|Date;
  endDate:string|Date;
  message$:string;
  constructor(
    private titleService:TitleService,
    private datesService:DatesService) {//dateService vive solo en el constructor
    this.dateData$= datesService.getDate;//no uso parentesis porque es un getter
  }

  ngOnInit(): void {
  // this.message$ recieves the async value  from the service
   this.subscription = this.titleService.currentTitle$.subscribe(message=>this.message$=message)
}

  ngOnDestroy(){
     this.subscription.unsubscribe();
   }

   setDate(date:Dates){
   this.newDate={startDate:this.startDate,endDate:this.endDate}
   console.log(this.newDate)
   this.datesService.addDate(date);
   }


}
