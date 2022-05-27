import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { TitleService} from '@services/title.service';
import { DatesService } from '@services/dates.service';
import { Dates } from '@models/date.model';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit,OnDestroy {
  subscription: Subscription
  dateData$= this.datesService.dateData$;
  // minDate= new Date(2018/1/1);
  // maxDate= new Date();
  startDate:string|Date;
  endDate:string|Date;
  newDate:Dates;
  message$:string;

  constructor(
    private titleService:TitleService,
    private datesService:DatesService) {//dateService vive solo en el constructor
    //this.dateData$= datesService.getValue();//no uso parentesis porque es un getter
    // this.newDate={startDate:this.startDate,endDate:this.endDate};

  }

  ngOnInit(): void {
  // this.message$ recieves the async value  from the service
   this.subscription = this.titleService.currentTitle$.subscribe(message=>this.message$=message)
   console.log(this.dateData$)
}

  ngOnDestroy(){
     this.subscription.unsubscribe();
   }

   setDate(date:any){
    this.newDate={startDate:this.startDate, endDate:this.endDate};
    date=this.newDate
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   this.datesService.addDate(date);
  //  console.log(typeof(this.startDate))
   }


}
