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
  dataId:any;
  data1_1:any;
  data2_1:any;
  data1_2:any;
  data2_2:any;
  chart:any
  myChart: any;
  enableState:boolean;
  stateMessage:String;
  enableButton:any;
   
    constructor(private winderService:WinderService) {
      this.winderData = this.winderService.getAllGapWinding();
      this.dataId =this.winderData.map(film=>{return film.rollId});
      this.data1_1 =this.winderData.map(film=>{return film.w1TensionP1});
      this.data2_1 =this.winderData.map(film=>{return film.w2TensionP1});
      this.data1_2 =this.winderData.map(film=>{return film.w1TensionP2});
      this.data2_2 =this.winderData.map(film=>{return film.w2TensionP2});
    }
  
    ngOnInit():void {
      Chart.register(...registerables);
      this.myChart=document.getElementById('chart3');
      this.enableButton=document.getElementById('enableButton')
      this.chart= new Chart(this.myChart,{
        type: 'line',
        data: {
            labels: this.dataId ,
            datasets: [
                {
                label: 'w1TensionP1',
                data: this.data1_1,
                borderColor: 'rgba(34,139,34, 1)',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'rgba(34,139,34, 0.8)'
                },
                {
                label: 'w2TensionP1',
                data: this.data2_1,
                borderColor:'rgb(243, 181, 81)',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'rgb(243, 181, 81)'
                },
                {
                  label: 'w1TensionP2',
                  data: this.data1_2,
                  borderColor:'rgba(0, 0, 120, 0.7)',
                  borderWidth: 3,
                  tension: 0.5,
                  pointRadius:2,
                  pointBorderColor:'rgba(0, 0, 139, 1)'
                  },
                  {
                    label: 'w2TensionP1',
                    data: this.data2_2,
                    borderColor:'rgb(42, 124, 190)',
                    borderWidth: 3,
                    tension: 0.5,
                    pointRadius:2,
                    pointBorderColor:'rgb(42, 124, 190)'
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
