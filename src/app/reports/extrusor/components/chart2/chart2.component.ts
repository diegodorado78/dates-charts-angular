import { Component, OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
import {ExtrusorService} from '../../../../core/services/extrusor.service'
@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})

export class Chart2Component implements OnInit {
public chartTitle="Coextrusor 1";
  extrusorData:any;
  data1:any;
  data2:any;
  data3:any;
  chart:any
  myChart: any;
  enableState:boolean;
  stateMessage:String;
  enableButton:any;
  
    constructor(private extrusorService:ExtrusorService) {
      this.extrusorData = this.extrusorService.getAllDataPoints();
      this.data1 =this.extrusorData.map(film=>{return film.roll_id});
      this.data2 =this.extrusorData.map(film=>{return film.MeltTempetaruteActual});
      this.data3 =this.extrusorData.map(film=>{return film.SetpointHeating});

    }
  
    ngOnInit():void {
      Chart.register(...registerables);
      this.myChart=document.getElementById('chart2');
      this.enableButton=document.getElementById('enableButton2')
      this.chart= new Chart(this.myChart,{
        type: 'line',
        data: {
            labels: this.data1 ,
            datasets: [
                {
                label: 'Melt Tempetarute Actual',
                data: this.data2,
                borderColor: ' #E60026',
                borderWidth:3,
                tension: 0.5,
                pointRadius:2,
                pointBorderColor:' #E60026'
                },
                {
                  label: 'Setpoint Heating',
                  data: this.data3,
                  borderColor: '#128385',
                  borderWidth: 3,
                  tension: 0.5,
                  pointRadius:2,
                  pointBorderColor:'#128385'
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
