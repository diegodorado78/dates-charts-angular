import { Component, OnInit, ElementRef,ViewChild,Input} from '@angular/core';
import * as d3 from 'd3';
import { WinderService } from 'src/app/core/services/winder.service';
import {WResponse} from '../../../../winderResponse.model'

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {
  chartTitle='Gap Winding';
  @Input() gapWindingData:WResponse[];
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
  
  ngOnInit(): void {
    setTimeout(()=>{
      this.initChart();
      this.createChart()
    },2000)
  }
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

  createChart() {
    var data =this.gapWindingData;
    console.log(data)
    var dataRange= data.map((x)=>x.rollId);
    console.log(dataRange);
    var xScale = d3.scalePoint()
        .domain(data.map(d => d.rollId))
        .range([0,this.contentWidth]) 

    var yScale = d3.scaleLinear()
      .domain([0,200])
      .range([this.contentHeight, 0]); 

    var line1 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX) 

    var line2 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)

    var line3 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)

    var line4 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)

    var line5 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)

    var line6 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)

    var line7 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)

    var line8 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)

    var line9 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)

    var line10 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX)
      var line11 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

    var line12 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

    var line13 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

    var line14 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

    var line15 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX) 

    var line16 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

    var line17 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

    var line18 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

    var line19 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); })
      .y(function (d: any) { return yScale(d.y); })
      .curve(d3.curveMonotoneX) 

    var line20 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

    //first winder data
    var dataset1 =data.map((roll)=>{
      return {y:roll.w1TensionP1,x:roll.rollId} })

  var dataset2 =data.map((roll)=>{
      return {y:roll.w1TensionP2,x:roll.rollId }})

  var dataset3 =data.map((roll)=>{
      return {y:roll.w1TensionP3,x:roll.rollId} })
       
  var dataset4 =data.map((roll)=>{
      return {y:roll.w1TensionP4,x:roll.rollId }})

  var dataset5 =data.map((roll)=>{
      return {y:roll.w1TensionP5,x:roll.rollId} })

  var dataset6 =data.map((roll)=>{
      return {y:roll.w1TensionP6,x:roll.rollId }})

  var dataset7 =data.map((roll)=>{
       return {y:roll.w1TensionP7,x:roll.rollId} })
               
  var dataset8 =data.map((roll)=>{
       return {y:roll.w1TensionP8,x:roll.rollId }})

  var dataset9 =data.map((roll)=>{
      return {y:roll.w1TensionP9,x:roll.rollId} })
               
  var dataset10 =data.map((roll)=>{
      return {y:roll.w1TensionP10,x:roll.rollId }})

   //second winder data
var dataset11 =data.map((roll)=>{
    return {y:roll.w2TensionP1,x:roll.rollId} })

var dataset12 =data.map((roll)=>{
    return {y:roll.w2TensionP2,x:roll.rollId }})

var dataset13 =data.map((roll)=>{
    return {y:roll.w2TensionP3,x:roll.rollId} })
     
var dataset14 =data.map((roll)=>{
    return {y:roll.w2TensionP4,x:roll.rollId }})

var dataset15 =data.map((roll)=>{
    return {y:roll.w2TensionP5,x:roll.rollId} })

var dataset16 =data.map((roll)=>{
    return {y:roll.w2TensionP6,x:roll.rollId }})

var dataset17 =data.map((roll)=>{
     return {y:roll.w2TensionP7,x:roll.rollId} })
             
var dataset18 =data.map((roll)=>{
     return {y:roll.w2TensionP8,x:roll.rollId }})

var dataset19 =data.map((roll)=>{
    return {y:roll.w2TensionP9,x:roll.rollId} })
             
var dataset20 =data.map((roll)=>{
    return {y:roll.w2TensionP10,x:roll.rollId }})

    this.g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + 0 + "," + this.contentHeight + ")")
      .call(d3.axisBottom(xScale)); 

    this.g.selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
    .style("font-size",".8em");

    this.g.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale)); 

      this.g.append("path")
      .datum(dataset1 ) 
      .attr("class", "winder__c3-line1")
      .attr("d", line1); 

    this.g.append("path")
      .datum(dataset2 )
      .attr("class", "winder__c3-line2")
      .attr("d", line2);

    this.g.append("path")
      .datum(dataset3 )
      .attr("class", "winder__c3-line3")
      .attr("d", line3);

    this.g.append("path")
      .datum(dataset4 )
      .attr("class", "winder__c3-line4")
      .attr("d", line4);

    this.g.append("path")
      .datum(dataset5 )
      .attr("class", "winder__c3-line1")
      .attr("d", line5);
      this.g.append("path")
      .datum(dataset6 ) 
      .attr("class", "winder__c3-line2")
      .attr("d", line6); 

    this.g.append("path")
      .datum(dataset7 )
      .attr("class", "winder__c3-line3")
      .attr("d", line7);

    this.g.append("path")
      .datum(dataset8 )
      .attr("class", "winder__c3-line4")
      .attr("d", line8);

    this.g.append("path")
      .datum(dataset9 )
      .attr("class", "winder__c3-line4")
      .attr("d", line9);

    this.g.append("path")
      .datum(dataset10 )
      .attr("class", "winder__c3-line3")
      .attr("d", line10);

    this.g.append("path")
      .datum(dataset11 ) 
      .attr("class", "winder__c3-line2")
      .attr("d", line11); 

    this.g.append("path")
      .datum(dataset12 )
      .attr("class", "winder__c3-line1")
      .attr("d", line12);

    this.g.append("path")
      .datum(dataset13 )
      .attr("class", "winder__c3-line4")
      .attr("d", line13);

    this.g.append("path")
      .datum(dataset14 )
      .attr("class", "winder__c3-line3")
      .attr("d", line14);

    this.g.append("path")
      .datum(dataset15 )
      .attr("class", "winder__c3-line2")
      .attr("d", line15);

    this.g.append("path")
      .datum(dataset16 ) 
      .attr("class", "winder__c3-line1")
      .attr("d", line16); 

    this.g.append("path")
      .datum(dataset17 )
      .attr("class", "winder__c3-line2")
      .attr("d", line17);

    this.g.append("path")
      .datum(dataset18 )
      .attr("class", "winder__c3-line3")
      .attr("d", line18);

    this.g.append("path")
      .datum(dataset19 )
      .attr("class", "winder__c3-line4")
      .attr("d", line19);

    this.g.append("path")
      .datum(dataset20 )
      .attr("class", "winder__c3-line1")
      .attr("d", line20);
  }

}
