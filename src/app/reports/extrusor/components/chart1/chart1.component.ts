import { Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {ExtrusorService} from '@services/extrusor.service'
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

public chartTitle="Coextrusor 1";
  extrusorData:any;
  data1:any;
  data2:any;
  data3:any;
  chart:any
  data4:any;

  myChart: any;
  enableState:boolean;
  stateMessage:String;
  enableButton:any;
  
    constructor(private extrusorService:ExtrusorService) {
      this.extrusorData = this.extrusorService.getAllDataPoints();
      this.data1 =this.extrusorData.map(film=>{return film.roll_id});
      this.data2 =this.extrusorData.map(film=>{return film.Setpoint});
      this.data3 =this.extrusorData.map(film=>{return film.Drives});
      this.data4 =this.extrusorData.map(film=>{return film.Actual});

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
                label: 'SetPoint',
                data: this.data2,
                borderColor: '#007F5C',
                borderWidth:3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:'#007F5C'
                },
                {
                  label: 'Drives',
                  data: this.data3,
                  borderColor: 'rgb(243, 181, 81)',
                  borderWidth: 3,
                  tension: 0.5,
                  pointRadius:2,
                  pointBorderColor:'rgb(243, 181, 81)'
                  },
                {
                    label: 'Actual',
                    data: this.data4,
                    borderColor: 'DarkBlue',
                    borderWidth: 3,
                    tension: 0.5,
                    pointRadius:2,
                    pointBorderColor:'DarkBlue'
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
