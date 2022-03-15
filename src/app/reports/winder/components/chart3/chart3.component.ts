import { Component, OnInit} from '@angular/core';
import { WinderService } from 'src/app/core/services/winder.service';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
import {WResponse} from '../../../../winderResponse.model'

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {
  chartTitle='Gap Winding';
  winderData:WResponse[];
  data1:any;
  data2:any;
  data3:any;
  chart:any
  myChart: any;
  enableState:boolean;
  stateMessage:String;
  enableButton:any;
   
    constructor(private winderService:WinderService) {
      this.winderData = this.winderService.getAllGapWinding();
      this.data1 =this.winderData.map(film=>{return film.rollId});
      this.data2 =this.winderData.map(film=>{return film.filmTension});
      this.data3 =this.winderData.map(film=>{return film.actual});
    }
  
    ngOnInit():void {
      Chart.register(...registerables);
      this.myChart=document.getElementById('chart2');
      this.enableButton=document.getElementById('enableButton')
      this.chart= new Chart(this.myChart,{
        type: 'line',
        data: {
            labels: this.data1 ,
            datasets: [
                {
                label: 'Film tension',
                data: this.data2,
                borderColor: 'rgba(34,139,34, 1)',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'rgba((34,139,34, 0.8)'
                },
                {
                label: 'Tension control',
                data: this.data3,
                borderColor:'rgba(0, 0, 120, 0.7)',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'rgba(0, 0, 139, 1)'
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
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                mode: 'xy',
              }
            }
          }
        },
      })
       this.setState()
    }
    resetZoom(){
     this.chart.resetZoom();
    }
  
    setState(){
    this.enableState=this.chart.options.plugins.zoom.zoom.wheel.enabled;
    if(this.enableState){
      return this.stateMessage="Enabled"
    }else{
      return this.stateMessage="Disabled";
    }
    }
  
    enableZoom(){
      this.chart.options.plugins.zoom.zoom.wheel.enabled = !this.chart.options.plugins.zoom.zoom.wheel.enabled;
      this.setState();
      this.chart.update();
    }


}
