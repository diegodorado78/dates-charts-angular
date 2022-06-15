import { Component, OnDestroy, OnInit} from '@angular/core';

import {DieService} from '@services/die.service';
import {DatesService } from '@services/dates.service';
import { Dates } from '@models/date.model';

import { map, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit,OnDestroy  {
  public chartTitle="Adapter 1";
  dieData:any;
  dieData2:any=[];
  data1:any;
  data2:any;
  data3:any;
  chart:any
  myChart: any;
  enableState:boolean;
  stateMessage:String;
  enableButton:any;
  dieDataSource$:any
  selectedDates:Dates;
  private unsubscribe$ = new Subject<void>();

    constructor(private dieService:DieService, private datesService:DatesService) {
    this.dieDataSource$=this.dieService.dataSource$;
    console.log(this.dieDataSource$)
      this.dieData = this.dieDataSource$.pipe(
       map(x=>{return x})
     )
     .subscribe(x=>this.dieData2.push(x));
     console.log(this.dieData)
    //  this.data1 =this.dieData.map(film=>{return film.roll_id});
    //  this.data2 =this.dieData.map(film=>{return film.Setpoint1});
    //   this.data3 =this.dieData.map(film=>{return film.Controller3});
      // this.dateData$=this.datesService.dateData$;
      // this.dateData$.pipe(
      //   takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
      // ).subscribe(x=>this.selectedDates=x );
      // const indexStartDate= this.selectedDates.startDate
      // const indexEndDate=this.selectedDates.endDate
      // this.dieData2= this.dieData.map(x => {
      //   if (new Date(x.date) >= indexStartDate && new Date(x.date) <= indexEndDate  ){
      //     console.log(x)
      //     return x
      //   }else{
      //     console.log("no match")
      //   }
      // })
      // this.data1 =this.dieData2.map(film=>{return film.roll_id});
      // this.data2 =this.dieData2.map(film=>{return film.Setpoint1});
      // this.data3 =this.dieData2.map(film=>{return film.Controller3});
    }

    ngOnInit():void {

      // console.log(this.selectedDates)
      // this.filterData();
      Chart.register(...registerables);
      this.myChart=document.getElementById('chart1');
      this.enableButton=document.getElementById('enableButton1')

      this.chart= new Chart(this.myChart,{
        type: 'line',
        data: {
            labels: this.data1 ,
            datasets: [
                {
                label: 'Set Point 1',
                data: this.data2,
                borderColor: '#007F5C',
                borderWidth:3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'#007F5C'
                },
                {
                  label: 'Controller 3',
                  data: this.data3,
                  borderColor: 'rgb(243, 181, 81)',
                  borderWidth: 3,
                  tension: 0.5,
                  pointRadius:2,
                  pointBorderColor:'rgb(243, 181, 81)'
                  }
                ]
       },
        options:{
          responsive:true,
          maintainAspectRatio:false,

          scales:{
            y:{
              beginAtZero:true,
              ticks:{
                font:{
                  size:10
                }
              }
            },
            x:{
              ticks:{
                font:{
                  size:10
                }
              }
            },
          },
          plugins:{
            legend: {
              labels: {
                  font: {
                      size: 10
                  }
              }
          },
            zoom:{
              zoom: {
                wheel: {
                  enabled: false,
                },
                pinch: {
                  enabled: false
                },
                mode: 'xy',
              },
              pan:{
                enabled:true
              },
            }
          }
        },
      })
       this.setState()
    }
    ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
    resetZoom(){
     this.chart.resetZoom();
    }
  filterData(){
  // const indexStartDate= this.selectedDates.startDate
  // const indexEndDate=this.selectedDates.endDate
  // this.dieData2= this.dieData.map(x => {
  //   if (new Date(x.date) >= indexStartDate && new Date(x.date) <= indexEndDate  ){
  //     console.log(x)
  //     return x
  //   }else{
  //     console.log("no match")
  //   }
  // })
  // this.data1 =this.dieData2.map(film=>{return film.roll_id});
  // this.data2 =this.dieData2.map(film=>{return film.Setpoint1});
  // this.data3 =this.dieData2.map(film=>{return film.Controller3});
  // realizar app header
  // <bco-app-header />
//   this.dieData2.filter((roll)=>{
//     var date= new Date(roll.date);
//   // return (dates.inRange(new Date("2022-06-01"),new Date("2022-06-15"))
//  })

   }

    setState(){
    this.enableState=this.chart.options.plugins.zoom.zoom.wheel.enabled;
    if(this.enableState){
      return this.stateMessage="On"
    }else{
      return this.stateMessage="Off";
    }
    }

    enableZoom(){
      this.chart.options.plugins.zoom.zoom.wheel.enabled = !this.chart.options.plugins.zoom.zoom.wheel.enabled;
      this.setState();
      this.chart.update();

    }


}
