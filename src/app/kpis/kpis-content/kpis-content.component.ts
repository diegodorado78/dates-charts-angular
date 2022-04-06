import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { LinesService } from 'src/app/core/services/lines.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis-content.component.html',
  styleUrls: ['./kpis-content.component.scss']
})
export class KpisContentComponent implements OnInit {
  yieldData:any;
  totalYield:number;
  actualYield:number;

  uptimeData:any;
  totalUptime:number;
  productionTime:number;

  capacityData:any;
  normalOutput:number;
  ouputWinder:number;

  dieData:any;
  dieData2:any;

  data1:any;
  data2:any;
  data3:any;

  myChart: any;
  chart:any;

line:any = {};
upLabel1:string='';
upLabel2:string='';
upLabel3:string='';

upUnid:string='';
upUnid2:string='';

downLabel1:string='';
downLabel2:string='';
downLabel3:string='';

downUnid:string='';
downUnid2:string='';

size:string=''
constructor( private route: ActivatedRoute, private linesService: LinesService){
  this.yieldData= this.linesService.getYieldData();
  this.totalYield= this.yieldData.map(line=>{return line.totalYield});
  this.actualYield= this.yieldData.map(line=>{return line.actualYield});

  this.uptimeData= this.linesService.getUptimeData();
  this.totalUptime= this.uptimeData.map(line=>{return line.totalUptime});
  this.totalUptime= this.totalUptime[0]
  this.productionTime= this.uptimeData.map(line=>{return line.productionTime});
  this.productionTime= this.productionTime[0]
  this.capacityData= this.linesService.getYieldData();
  this.normalOutput= this.capacityData.map(line=>{return line.normalOutput});
  this.ouputWinder= this.capacityData.map(line=>{return line.ouputWinder});

}
  ngOnInit(): void {
    Chart.register(...registerables);

    this.route.params.subscribe((params: Params) => {
      const id = params.id; // guardo el id que pasamos como param para usarlo en el metodo
      // this.line = this.linesService.getLine(id); // as product x indicar el tipo de resp que espero al llamar al service
      // llamo al metodo get product del service
    });

    this.myChart=document.getElementById('chart1');
    this.chart= new Chart(this.myChart,{
      type: 'bar',
      data: {
          labels: ["Yield"] ,
          datasets: [
            {
              label: "Good Roll",
              data: this.actualYield,
              backgroundColor:'#008000',
              borderColor:'transparent',
              barPercentage: 1,
              borderWidth:3,
              },
              {
              label:'Total Material',
              data: this.totalYield,
              backgroundColor:'#91897c' ,
              borderColor:'grey',
              barPercentage: 1,
              borderWidth:3,
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
            },
            stacked:false,
            grid:{
              drawBorder:false,
              color:'transparent'
            }
          },

          x:{
            ticks:{
              font:{
                size:10
              }
            },
            stacked:true,
            grid:{
              drawBorder:false
            }

          },
        },
        plugins:{
          legend: {
            display:false,
            labels: {
                font: {
                    size: 10
                }
            }
        },
        }

      },

    })
    //  this.setState()

  }
  updateYield(){

  }
  updateUptime(chart){
  // this.chart.data.datasets[0]= this.productionTime;
  // this.chart.data.datasets[1]= this.totalUptime;
  chart.data.datasets[0].data[0]= this.productionTime;
  console.log(this.chart.data.datasets[0].data[0])
  chart.data.datasets[1].data[0]= this.totalUptime;
  this.chart.update();

  }
  updateCapacity(){
    // dataSet[0]= this.newData

  }
  }
