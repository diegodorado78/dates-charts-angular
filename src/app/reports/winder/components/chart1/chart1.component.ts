import { Component, OnInit,ElementRef,ViewChild, OnChanges, Input } from '@angular/core';
import { WinderService } from 'src/app/core/services/winder.service';
import * as d3 from 'd3';
import {Response} from '../../../../response.model'


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

public chartTitle="Film Tension";
 @Input() filmTensionData:Response[];
 @ViewChild("chart", { static: true }) protected chartContainer: ElementRef;
  svg: any;
  g: any;
  tooltip: any;
  margin: { top: number; right: number; bottom: number; left: number; };
  contentWidth: number;
  contentHeight: number;
  width: number;
  height: number;
  n:any=[];
  constructor(private winderService:WinderService) { 
   
  }
   
  // ngOnChanges():void{

  // }
  ngOnInit():void {
    //  this.initChart();
    // this.createChart();
    // this.fetchData(); 
       setTimeout(()=>{
       this.initChart();
       this.createChart()
     },1000)

    
    }
  
  //  fetchData=()=>{
  //   this.winderService.getAllDataPoints()
  //   .subscribe((response:Response[])=>{
  //      this.winderData = response['data'];
  //     console.log(this.winderData)
  //   })
  //   return this.winderData
  // }
 
// primer metodo para crear el contenedor del chart
  initChart() {
    const element = this.chartContainer.nativeElement;
    this.svg = d3.select(element);
    this.margin = {
      top: +this.svg.style("margin-top").replace("px", ""),
      right: +this.svg.style("margin-right").replace("px", ""),
      bottom: +this.svg.style("margin-bottom").replace("px", ""),
      left: +this.svg.style("margin-left").replace("px", "")
    };
    this.width = +this.svg.style("width").replace("px", "");
    this.height = +this.svg.style("height").replace("px", "");
    this.contentWidth = this.width - this.margin.left - this.margin.right;
    this.contentHeight = this.height - this.margin.top - this.margin.bottom;
    this.g = this.svg.append("g").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }
  genChart(){
  }
 createChart() {
    var data =  this.filmTensionData
    console.log(data)
    var xScale = d3.scalePoint()
        .domain(data.map((d:any) => d.rollId))
        .range([0,this.contentWidth]) 

    var yScale = d3.scaleLinear()
      .domain([0, Math.max.apply(Math, data.map(roll => roll.filmTension))])
      .range([this.contentHeight, 0]); 

      var line = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

      var dataset =data.map((roll)=>{
      return {y:roll.filmTension,x:roll.rollId }})

    this.g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + 0 + "," + this.contentHeight + ")")
      .call(d3.axisBottom(xScale)); 

    this.g.selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-90)")
    .style("text-anchor", "end")
    .style("font-size",".8em");

    this.g.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale)); 

    this.g.append("path")
      .datum(dataset ) 
      .attr("class", "winder__c1-line1") 
      .attr("d", line); 
    
    this.g.selectAll(".dot")
      .data(dataset)
      .enter().append("circle") 
      .attr("class", "winder__c1-dot") 
      .attr("cx", function (d, i) { return xScale(d.x) })
      .attr("cy", function (d) { return yScale(d.y) })
      .attr("r", 3)
      
  }
 

}
