import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { TitleService} from '@services/title.service';
import { DatesService } from '@services/dates.service';
import {ExtrusorService} from '@services/extrusor.service';
import {DieService} from '@services/die.service';
import {WinderService} from '@services/winder.service';
import { Dates } from '@models/date.model';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit,OnDestroy {
  subscription: Subscription
  dateData$= this.datesService.dateData$;
  extrusorDataSource:any;
  dieDataSource:any;
  winderDataSource:any;
  filteredDataset=[]
  startDate:string|Date;
  endDate:string|Date;
  newDate:Dates;
  message$:string;
  constructor(
    private titleService:TitleService,
    private datesService:DatesService,
    private extrusorService:ExtrusorService,
    private dieService:DieService,
    private winderService:WinderService){}

  ngOnInit(): void {
   this.subscription = this.titleService.currentTitle$.subscribe(message=>this.message$=message);
  }

  ngOnDestroy(){
     this.subscription.unsubscribe();
   }
   setExtrusorDataSource(date:Dates){
    this.extrusorDataSource = this.extrusorService.getAllDataPoints();
    this.newDate={startDate:this.startDate, endDate:this.endDate};
    date=this.newDate
    this.datesService.addDate(date);
    const indexStartDate= this.newDate.startDate
    const indexEndDate=this.newDate.endDate
    this.extrusorDataSource.forEach(x => {
       if (new Date(x.date) >= indexStartDate && new Date(x.date) <= indexEndDate){
          this.filteredDataset.push(x)}
     })
     this.extrusorService.addDataSet(this.filteredDataset)
   }

   setDieDataSource(date:Dates){
   this.dieDataSource = this.dieService.getAllDataPoints();
   this.newDate={startDate:this.startDate, endDate:this.endDate};
   date=this.newDate
   this.datesService.addDate(date);
   const indexStartDate= this.newDate.startDate
   const indexEndDate=this.newDate.endDate
   this.dieDataSource.forEach(x => {
      if (new Date(x.date) >= indexStartDate && new Date(x.date)<= indexEndDate){
         this.filteredDataset.push(x)}
    })
    this.dieService.addDataSet(this.filteredDataset)
   }

   setWinderDataSource(date:Dates){
    this.winderDataSource = this.winderService.getAllDataPoints();
    this.newDate={startDate:this.startDate, endDate:this.endDate};
    date=this.newDate
    this.datesService.addDate(date);
    const indexStartDate= this.newDate.startDate
    const indexEndDate=this.newDate.endDate
    this.winderDataSource.forEach(x => {
       if (new Date(x.date) >= indexStartDate && new Date(x.date) <= indexEndDate){
          this.filteredDataset.push(x)}
     })
     this.winderService.addDataSet(this.filteredDataset)
   }


}
