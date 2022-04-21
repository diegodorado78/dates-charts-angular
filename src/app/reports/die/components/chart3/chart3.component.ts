import { Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {DieService} from '@services/die.service';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {
  public chartTitle="Adapter 3";
  dieData:any;
  data1:any;
  data2:any;
  data3:any;
  chart:any
  myChart: any;
  enableState:boolean;
  stateMessage:String;
  enableButton:any;

    constructor(private dieService:DieService) {
      this.dieData = this.dieService.getAllDataPoints();
      this.data1 =this.dieData.map(film=>{return film.roll_id});
      this.data2 =this.dieData.map(film=>{return film.Setpoint2_3});
      this.data3 =this.dieData.map(film=>{return film.Actual});
    }

    ngOnInit():void {
      Chart.register(...registerables);
      this.myChart=document.getElementById('chart3');
      this.enableButton=document.getElementById('enableButton3')
      this.chart= new Chart(this.myChart,{
        type: 'line',
        data: {
            labels: this.data1 ,
            datasets: [
                {
                label: 'Setpoint',
                data: this.data2,
                borderColor: 'DarkOrange',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'DarkOrange'
                },
                {
                label: 'Actual',
                data: this.data3,
                borderColor:'#a2333c',
                borderWidth: 3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'#a2333c'
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
