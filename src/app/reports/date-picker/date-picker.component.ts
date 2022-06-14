import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { TitleService} from '@services/title.service';
import { DatesService } from '@services/dates.service';
import {DieService} from '@services/die.service';

import { Dates } from '@models/date.model';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit,OnDestroy {
  subscription: Subscription
  dateData$= this.datesService.dateData$;
  dieDataSource:any;
  filteredDataset:any
  startDate:string|Date;
  endDate:string|Date;
  newDate:Dates;
  message$:string;

  constructor(
    private titleService:TitleService,
    private datesService:DatesService,
    private dieService:DieService) {//dateService vive solo en el constructor
    //this.dateData$= datesService.getValue();//no uso parentesis porque es un getter
    // this.newDate={startDate:this.startDate,endDate:this.endDate};
    this.dieDataSource = this.dieService.getAllDataPoints();

    console.log(this.dieDataSource)

  }

  ngOnInit(): void {
  // this.message$ recieves the async value  from the service
   this.subscription = this.titleService.currentTitle$.subscribe(message=>this.message$=message);

}

  ngOnDestroy(){
     this.subscription.unsubscribe();
   }

   setDieDataSource(date:Dates){
   this.newDate={startDate:this.startDate, endDate:this.endDate};
   date=this.newDate
   this.datesService.addDate(date);

   // method to filter and pass the data set to the chart
   //date.pipe(
    //   takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
    // ).subscribe(x=>this.selectedDates=x );
    const indexStartDate= this.newDate.startDate
    const indexEndDate=this.newDate.endDate
    this.filteredDataset= this.dieDataSource.map(x => {
      if (new Date(x.date) >= indexStartDate && new Date(x.date) <= indexEndDate  ){
        return x
      }
    })
    this.dieService.addDataSet(this.filteredDataset)
    console.log(this.filteredDataset)
   }




}
