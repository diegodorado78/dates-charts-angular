import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import * as d3 from 'd3';
import  jspdf from 'jspdf';  
import html2canvas from 'html2canvas';
import {DieService } from 'src/app/core/services/die.service';
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

public titulo="Adapter 1";
private dieData:any= [];
   @ViewChild("chart", { static: true }) protected chart: ElementRef;
  svg: any;
  g: any;
  jsPDF:any;
  tooltip: any;
  margin: { top: number; right: number; bottom: number; left: number; };
  contentWidth: number;
  contentHeight: number;
  width: number;
  height: number;
  n:any=[];
  
  constructor(private dieService:DieService) { }
  ngOnInit(): void {
    this.dieData =this.dieService.getAllDataPoints();
    this.initChart();
    this.createChart();
  }
  initChart() {
    const element = this.chart.nativeElement;
    this.svg = d3.select(element);
    this.margin = {
      //methods to resize  the chart by modifying converting the pixel values to numbers added through css with the class name .svg__chart
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
    // The number of datapoints
    var data =this.dieData;
    var dataRange= data.map((x)=>x.roll_id);
    //  X scale will use the index of our data
    var xScale = d3.scalePoint()//scalepoint,scaleLinear
        .domain(data.map(d => d.roll_id))// domain values
        .range([0,this.contentWidth]) 
    // .domain([0, Math.max.apply(Math, data.map(roll => roll.position))]); // input [0, data.length]
    var yScale = d3.scaleLinear()
      .domain([0, Math.max.apply(Math, data.map(roll => roll.Setpoint1))+25])// data.map(d => d.FilmTension)rango y tomando cada posicion input
      .range([this.contentHeight, 0]); // output
      
    // 7. d3's line generator
    var line = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) // set the x values for the line generator
      .y(function (d: any) { return yScale(d.y); }) // set the y values for the line generator
      .curve(d3.curveMonotoneX) // apply smoothing to the line

    var line2 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 

      // An array of objects of length N. Each object has key -> value pair, the key being "y,x" and the values setpoint and roll_id
    var dataset =data.map((roll)=>{
      return {y:roll.Setpoint2_3, x:roll.roll_id }})
    //second data set for the second line
    var dataset2 =data.map((roll)=>{
      return {y:roll.Controller, x:roll.roll_id } })
    //  Call the x axis in a group tag
    this.g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + 0 + "," + this.contentHeight + ")")
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom
    this.g.selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
    .style("font-size",".8em");

    // Call the y axis in a group tag
    this.g.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    // Append the path, bind the data, and call the line generator
    this.g.append("path")
      .datum(dataset ) //Binds data to the line
      .attr("class", "die__c1-line1") // Assign a class for styling
      .attr("d", line); // Calls the line generator

  //  Appends the second line to the chart
    this.g.append("path")
      .datum(dataset2 )
      .attr("class", "die__c1-line2")
      .attr("d", line2);

  //  Appends a circle for each datapoint
    this.g.selectAll(".dot")
   .data(dataset2)
   .enter().append("circle") // Uses the enter().append() method
   .attr("class", "die__c1-dot") // Assign a class for styling
   .attr("cx", function (d, i) { return xScale(d.x) })
   .attr("cy", function (d) { return yScale(d.y) })
   .attr("r", 3)
  }
  public openPDF():void {
    let DATA = document.getElementById('card__print-container');
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jspdf("p",);
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('adapter1.pdf');
    });     
    }
    
}
