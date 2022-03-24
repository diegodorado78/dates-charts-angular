import { Component, OnInit} from '@angular/core';
import {DieService } from 'src/app/core/services/die.service';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {
  public chartTitle="Adapter 1";
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
      this.data2 =this.dieData.map(film=>{return film.Setpoint1});
      this.data3 =this.dieData.map(film=>{return film.Controller3});
    }
  
    ngOnInit():void {
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
