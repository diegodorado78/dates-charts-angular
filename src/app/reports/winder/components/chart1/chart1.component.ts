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

public chartTitle="patito";
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
              borderWidth: 3,
              tension: 0.5,
              pointRadius:2,
              pointBorderColor:'rgba(255, 0, 0, 0.8)'
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
resetZoom(){
  this.myChart.resetZoom()
}
}
