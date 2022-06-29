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
  extrusorDataSourceAll:any;
  extrusorDataSourceMain:any=[];

  dieDataSource:any;

  winderDataSourceAll:any;
  winderDataSourceGap:any;
  winderDataSourceContact:any;

  filteredExtrusorAll:any=[];
  filteredExtrusorMain:any=[];

  filteredWinderAll:any=[];
  filteredWinderGap:any=[];
  filteredWinderContact:any=[];



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

   // Extrusor source filter method
   setExtrusorDataSource(date:Dates){
    this.newDate={startDate:this.startDate, endDate:this.endDate};
    date=this.newDate
    this.datesService.addDate(date);
    const indexStartDate= this.newDate.startDate
    const indexEndDate=this.newDate.endDate

    this.extrusorDataSourceAll=this.extrusorService.getAllDataPoints().forEach(dataPoint => {
       if (new Date(dataPoint.date) >= indexStartDate && new Date(dataPoint.date) <= indexEndDate){
        this.filteredExtrusorAll.push(dataPoint)}
     })

    this.extrusorDataSourceMain=this.extrusorService.getAllDataPointsMain().forEach(main => {
      if (new Date(main.date) >= indexStartDate && new Date(main.date) <= indexEndDate){
        this.filteredExtrusorMain.push(main) }
    })

    this.filteredDataset=[this.filteredExtrusorAll,this.filteredExtrusorMain]
    this.extrusorService.addDataSet(this.filteredDataset)
   }

   // Die source filter method
   setDieDataSource(date:Dates){
   this.newDate={startDate:this.startDate, endDate:this.endDate};
   date=this.newDate;
   this.datesService.addDate(date);
   const indexStartDate= this.newDate.startDate;
   const indexEndDate=this.newDate.endDate;

   this.dieDataSource = this.dieService.getAllDataPoints().forEach(dataPoint => {
    if (new Date(dataPoint.date) >= indexStartDate && new Date(dataPoint.date)<= indexEndDate){
         this.filteredDataset.push(dataPoint)} })

   this.dieService.addDataSet(this.filteredDataset);
   }

    // Winder source filter method
   setWinderDataSource(date:Dates){
    this.newDate={startDate:this.startDate, endDate:this.endDate};
    date=this.newDate
    this.datesService.addDate(date);
    const indexStartDate= this.newDate.startDate;
    const indexEndDate=this.newDate.endDate;

    this.winderDataSourceAll=this.winderService.getAllDataPoints().forEach(dataPoint => {
       if (new Date(dataPoint.date) >= indexStartDate && new Date(dataPoint.date) <= indexEndDate){
       this.filteredWinderAll.push(dataPoint)  } })

     this.winderDataSourceGap=this.winderService.getAllGapWinding().forEach(gap => {
      if (new Date(gap.date) >= indexStartDate && new Date(gap.date) <= indexEndDate){
        this.filteredWinderGap.push(gap)} })

    this.winderDataSourceContact=this.winderService.getAllContactWinding().forEach(contact => {
      if (new Date(contact.date) >= indexStartDate && new Date(contact.date) <= indexEndDate){
        this.filteredWinderContact.push(contact) }  })

    this.filteredDataset= [this.filteredWinderAll,this.filteredWinderGap,this.filteredWinderContact]
     this.winderService.addDataSet(this.filteredDataset)
   }
}
