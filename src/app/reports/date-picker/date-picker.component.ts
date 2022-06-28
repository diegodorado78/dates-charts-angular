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
    this.extrusorDataSourceAll = this.extrusorService.getAllDataPoints();
    this.extrusorDataSourceMain = this.extrusorService.getAllDataPointsMain();

    this.newDate={startDate:this.startDate, endDate:this.endDate};
    date=this.newDate
    this.datesService.addDate(date);
    const indexStartDate= this.newDate.startDate
    const indexEndDate=this.newDate.endDate

    this.extrusorDataSourceAll.filter(x => {
       if (new Date(x.date) >= indexStartDate && new Date(x.date) <= indexEndDate){
        return x
      }
     })
     this.extrusorDataSourceMain.filter(main => {
      if (new Date(main.date) >= indexStartDate && new Date(main.date) <= indexEndDate){
       return main
     }
    })
    this.filteredDataset=[this.extrusorDataSourceAll,this.extrusorDataSourceMain]
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
    this.winderDataSourceAll = this.winderService.getAllDataPoints();
    this.winderDataSourceGap = this.winderService.getAllGapWinding();
    this.winderDataSourceContact = this.winderService.getAllContactWinding();

    this.newDate={startDate:this.startDate, endDate:this.endDate};
    date=this.newDate
    this.datesService.addDate(date);
    const indexStartDate= this.newDate.startDate;
    const indexEndDate=this.newDate.endDate;

    this.winderDataSourceAll.filter(x => {
       if (new Date(x.date) >= indexStartDate && new Date(x.date) <= indexEndDate){
          return x;
        }
     })
     this.winderDataSourceGap.filter(gap => {
      if (new Date(gap.date) >= indexStartDate && new Date(gap.date) <= indexEndDate){
        return gap;
        }
    })
    this.winderDataSourceContact.forEach(contact => {
      if (new Date(contact.date) >= indexStartDate && new Date(contact.date) <= indexEndDate){
       return contact;
      }
    })
    this.filteredDataset= [this.winderDataSourceAll,this.winderDataSourceGap,this.winderDataSourceContact]
     this.winderService.addDataSet(this.filteredDataset)
   }


}
