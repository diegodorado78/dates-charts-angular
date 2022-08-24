import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TitleService} from '@services/title.service';
import { DatesService } from '@services/dates.service';
import {ExtrusorService} from '@services/extrusor.service';
import {DieService} from '@services/die.service';
import { Dates } from '@models/date.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit,OnDestroy {
  subscription: Subscription
  // dateData$= this.datesService.dateData$;
  extrusorDataSourceAll:any;
  extrusorDataSourceMain:any=[];
  dieDataSource:any;
  winderDataSourceAll:any;
  winderDataSourceGap:any;
  winderDataSourceContact:any;
  winderDataSourceFilm:any;
  filteredDataset=[]
  startDate:Date;
  endDate:string|Date;
  newDate:Dates;
  message$:string;
  constructor(
    private titleService:TitleService,
    private datesService:DatesService,
    private extrusorService:ExtrusorService,
    private dieService:DieService,
    ){}

  ngOnInit(): void {
   this.subscription = this.titleService.currentTitle$.subscribe(message=>this.message$=message);}

  ngOnDestroy(){
     this.subscription.unsubscribe();
   }
   // Extrusor source filter method
   setExtrusorDataSource(date:Dates){
    this.newDate={startDate:this.startDate, endDate:this.endDate};
    date=this.newDate

    this.datesService.addDate(date);
    const indexStartDate= this.newDate.startDate
    const indexEndDate=this.newDate.endDate

    this.extrusorDataSourceAll=this.extrusorService.getAllDataPoints()
    .filter(dataPoint => new Date(dataPoint.date) >= indexStartDate && new Date(dataPoint.date) <= indexEndDate)

    this.extrusorDataSourceMain=this.extrusorService.getAllDataPointsMain()
    .filter(main => new Date(main.date) >= indexStartDate && new Date(main.date) <= indexEndDate)

    this.filteredDataset=[this.extrusorDataSourceAll,this.extrusorDataSourceMain]
    this.extrusorService.addDataSet(this.filteredDataset)
   }

   // Die source filter method
   setDieDataSource(){
    this.newDate={
      "startDate": formatDate(this.startDate,'yyyy/MM/dd', 'en'),
      "endDate":formatDate(this.endDate,'yyyy/MM/dd', 'en')
    }
    return this.datesService.addDate(this.newDate);
   }

    // Winder source filter method
   setWinderDataSource(){
    this.newDate={
      "startDate": formatDate(this.startDate,'yyyy/MM/dd', 'en'),
      "endDate":formatDate(this.endDate,'yyyy/MM/dd', 'en')
    }
    return this.datesService.addDate(this.newDate);
   }

   setLastMonthDate(){
    const currentDate= new Date(Date.now());
    const initialDate = new Date(currentDate.getTime()-1000*2592000);
    this.newDate={
      "startDate": formatDate(initialDate,'yyyy/MM/dd', 'en'),
      "endDate":formatDate(currentDate,'yyyy/MM/dd', 'en')}

    this.datesService.addDate(this.newDate)

   }
}
