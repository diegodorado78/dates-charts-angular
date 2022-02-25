import { Component, OnInit,ElementRef,ViewChild, OnChanges, Input } from '@angular/core';
import { WinderService } from 'src/app/core/services/winder.service';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
// import * as d3 from 'd3';
import {Response} from '../../../../response.model'


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {
  // winderData:Response[]= [
  //   {"rollId":"0A1602221603","filmTension":132,"setPoint":42.8,"actual":29.4,},
  //   {"rollId":"0A1602221748","filmTension":139.1,"setPoint":42.9,"actual":31.4,},
  //   {"rollId":"0A1602221932","filmTension":135.3,"setPoint":42.8,"actual":30,},
  //   {"rollId":"0A1602222327","filmTension":184.6,"setPoint":42.9,"actual":40.6,},
  //   {"rollId":"0A1602230334","filmTension":119.6,"setPoint":42.8,"actual":26.5,},
  //   {"rollId":"0A1602231554","filmTension":202.4,"setPoint":42.8,"actual":43.8,},
  //   {"rollId":"0A1602232120","filmTension":135.2,"setPoint":42.8,"actual":30.1,},
  //   {"rollId":"0A1602240211","filmTension":192.3,"setPoint":42.9,"actual":42.3,},
  //   {"rollId":"0A1602240918","filmTension":136.8,"setPoint":42.8,"actual":31.3,},
  //   {"rollId":"0A1602241019","filmTension":217.4,"setPoint":42.8,"actual":47.5,},
  //   {"rollId":"0A1602241140","filmTension":146,"setPoint":42.8,"actual":32.9,},
  //   {"rollId":"0A1602242455","filmTension":145,"setPoint":42.8,"actual":32.5,},
  //   {"rollId":"0A1602250854","filmTension":138.9,"setPoint":42.8,"actual":31.3,},
  //   {"rollId":"0A1602251419","filmTension":150.5,"setPoint":42.8,"actual":33.2,},
  //   {"rollId":"0A1604240933","filmTension":44.4,"setPoint":42.8,"actual":11.6,},
  //   {"rollId":"0A1604241245","filmTension":58.4,"setPoint":42.8,"actual":14.6,},
  //   {"rollId":"0A1604241404","filmTension":49.5,"setPoint":42.8,"actual":12.9,},
  //   {"rollId":"0A1604241701","filmTension":67.4,"setPoint":42.8,"actual":15.8,},
  //   {"rollId":"0A1604242329","filmTension":82,"setPoint":42.8,"actual":19.1,},
  //   {"rollId":"0A1604250142","filmTension":92.3,"setPoint":42.8,"actual":20.9,},
  //   {"rollId":"0A1604250643","filmTension":146.4,"setPoint":42.7,"actual":31.1,},
  //   {"rollId":"0A1604251351","filmTension":128,"setPoint":42.8,"actual":28.8,},
  //   {"rollId":"0A1604251719","filmTension":139.4,"setPoint":42.8,"actual":31,}
  //   ,{"rollId":"0A1604251904","filmTension":145,"setPoint":42.8,"actual":31.7,},
  //   {"rollId":"0A1606101615","filmTension":198.5,"setPoint":42.8,"actual":43,},
  //   {"rollId":"0A1606101822","filmTension":224.9,"setPoint":42.9,"actual":48.9,},
  //   {"rollId":"0A1606102326","filmTension":245.8,"setPoint":42.8,"actual":52.9,},
  //   {"rollId":"0A1606110251","filmTension":223.9,"setPoint":42.8,"actual":48.4,},
  //   {"rollId":"0A1606110733","filmTension":186.4,"setPoint":42.7,"actual":39.8,},
  //   {"rollId":"0A1606111154","filmTension":187.7,"setPoint":42.8,"actual":40.9,},
  //   {"rollId":"0A1606111514","filmTension":207.7,"setPoint":42.8,"actual":44.9,},
  //   {"rollId":"0A1606111826","filmTension":178.5,"setPoint":42.9,"actual":39.2,},
  //   {"rollId":"0A1606112242","filmTension":175.6,"setPoint":42.9,"actual":38.9,},
  //   {"rollId":"0A1606112449","filmTension":192.3,"setPoint":42.9,"actual":41.6,},
  //   {"rollId":"0A1606120256","filmTension":192.3,"setPoint":42.9,"actual":42.1,},
  //   {"rollId":"0A1606120609","filmTension":193.9,"setPoint":42.7,"actual":41.2,},
  //   {"rollId":"0A1606121157","filmTension":169.3,"setPoint":42.8,"actual":37.1,},
  //   {"rollId":"0A1606121507","filmTension":180.7,"setPoint":42.8,"actual":39.4,},
  //   {"rollId":"0A1606121938","filmTension":206.8,"setPoint":42.8,"actual":44.4,},
  //   {"rollId":"0A1606122253","filmTension":178,"setPoint":42.9,"actual":39,}
  //   ,{"rollId":"0A1606130207","filmTension":198.2,"setPoint":42.8,"actual":2.8},
  //   {"rollId":"0A1606130521","filmTension":194.4,"setPoint":42.6,"actual":41.4,},
  //   {"rollId":"0A1607291555","filmTension":208.6,"setPoint":42.9,"actual":45,}
  //   ,{"rollId":"0A1607291748","filmTension":192.2,"setPoint":42.9,"actual":41.8,},
  //   {"rollId":"0A1607292308","filmTension":174.9,"setPoint":42.8,"actual":38,}
  //   ,{"rollId":"0A1607300157","filmTension":194.2,"setPoint":42.8,"actual":42.2,},
  //   {"rollId":"0A1607300406","filmTension":194.5,"setPoint":42.6,"actual":41.3,},
  //   {"rollId":"0A1607300734","filmTension":191,"setPoint":42.7,"actual":40.5,},
  //   {"rollId":"0A1607301245","filmTension":171.1,"setPoint":42.9,"actual":37.6,},
  //   {"rollId":"0A1607310425","filmTension":188.6,"setPoint":42.7,"actual":40.3,},
  //   {"rollId":"0A1609081528","filmTension":229.7,"setPoint":42.8,"actual":49.9,},
  //   {"rollId":"0A1609081821","filmTension":215.6,"setPoint":42.8,"actual":47.1,},
  //   {"rollId":"0A1609082155","filmTension":230.5,"setPoint":42.8,"actual":50.3,},
  //   {"rollId":"0A1609082300","filmTension":230.9,"setPoint":42.8,"actual":49.8,},
  //   {"rollId":"0A1609090252","filmTension":212.3,"setPoint":42.8,"actual":46.1,},  
  //    ];

public chartTitle="Film Tension";
winderData:Response[];
data1:any;
data2:any;
data3:any;

//  @Input() filmTensionData:Response[];
//  @ViewChild("chart", { static: true }) protected chartContainer: ElementRef;
  // svg: any;
  // g: any;
  // tooltip: any;
  // margin: { top: number; right: number; bottom: number; left: number; };
  // contentWidth: number;
  // contentHeight: number;
  // width: number;
  // height: number;
  // n:any=[];

  myChart: any;
  

  constructor(private winderService:WinderService) { 
    this.winderData = this.winderService.getAllDataPoints();
    this.data1 =this.winderData.map(film=>{return film.rollId});
    this.data2 =this.winderData.map(film=>{return film.filmTension});
    this.data3 =this.winderData.map(film=>{return film.actual});
  }
   
  // ngOnChanges():void{
  // }
  ngOnInit():void {
    this.myChart=document.getElementById('canvas')
    Chart.register(...registerables);
    this.loadChart();
  }
  
    loadChart(){
     new Chart(this.myChart,{
      type: 'line',
      data: {
          labels: this.data1 ,      
          datasets: [
              {
              label: 'Film tension',
              data: this.data2,
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 2.8,
              tension: .3
              },
              {
              label: 'Tension control',
              data: this.data3,
              borderColor:'rgba(0, 0, 139, 1)',
              borderWidth: 2,
              tension: 0.2
              }
              ]
     },
      options:{
        responsive:true,
        maintainAspectRatio:true,
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
      }
    })
   
  //  fetchData=()=>{
  //   this.winderService.getAllDataPoints()
  //   .subscribe((response:Response[])=>{
  //      this.winderData = response['data'];
  //     console.log(this.winderData)
  //   })
  //   return this.winderData
  // }
 
// // primer metodo para crear el contenedor del chart
//   initChart() {
//     const element = this.chartContainer.nativeElement;
//     this.svg = d3.select(element);
//     this.margin = {
//       top: +this.svg.style("margin-top").replace("px", ""),
//       right: +this.svg.style("margin-right").replace("px", ""),
//       bottom: +this.svg.style("margin-bottom").replace("px", ""),
//       left: +this.svg.style("margin-left").replace("px", "")
//     };
//     this.width = +this.svg.style("width").replace("px", "");
//     this.height = +this.svg.style("height").replace("px", "");
//     this.contentWidth = this.width - this.margin.left - this.margin.right;
//     this.contentHeight = this.height - this.margin.top - this.margin.bottom;
//     this.g = this.svg.append("g").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
//   }
//   genChart(){
//   }
//  createChart() {
//     var data =  this.filmTensionData
//     console.log(data)
//     var xScale = d3.scalePoint()
//         .domain(data.map((d:any) => d.rollId))
//         .range([0,this.contentWidth]) 

//     var yScale = d3.scaleLinear()
//       .domain([0, Math.max.apply(Math, data.map(roll => roll.filmTension))])
//       .range([this.contentHeight, 0]); 

//       var line = d3.line()
//       .x(function (d:any, i:any) { return xScale(d.x); }) 
//       .y(function (d: any) { return yScale(d.y); }) 
//       .curve(d3.curveMonotoneX) 

//       var dataset =data.map((roll)=>{
//       return {y:roll.filmTension,x:roll.rollId }})

//     this.g.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(" + 0 + "," + this.contentHeight + ")")
//       .call(d3.axisBottom(xScale)); 

//     this.g.selectAll("text")
//     .attr("transform", "translate(-10,0)rotate(-90)")
//     .style("text-anchor", "end")
//     .style("font-size",".8em");

//     this.g.append("g")
//       .attr("class", "y axis")
//       .call(d3.axisLeft(yScale)); 

//     this.g.append("path")
//       .datum(dataset ) 
//       .attr("class", "winder__c1-line1") 
//       .attr("d", line); 
    
//     this.g.selectAll(".dot")
//       .data(dataset)
//       .enter().append("circle") 
//       .attr("class", "winder__c1-dot") 
//       .attr("cx", function (d, i) { return xScale(d.x) })
//       .attr("cy", function (d) { return yScale(d.y) })
//       .attr("r", 3)
//   }
}
}