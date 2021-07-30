import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import * as d3 from 'd3';
import {ExtrusorService} from '../../../../core/services/extrusor.service'
@Component({
  selector: 'app-chart-e1',
  templateUrl: './chart-e1.component.html',
  styleUrls: ['./chart-e1.component.scss']
})
export class ChartE1Component implements OnInit {

public titulo="Coextrusor 1";
private extrusorData:any= [];
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
  constructor(private extrusorService:ExtrusorService) { }
  ngOnInit(): void {
    this.extrusorData =this.extrusorService.getAllDataPoints();
    this.initChart();
    this.createChart();
  }
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
  // segundo metodo para crear el el chart con la info

  createChart() {
    // The number of datapoints
    var data =this.extrusorData;
    var dataRange= data.map((x)=>x.roll_id);
    // console.log(dataRange);
    // 5. X scale will use the index of our data
    var xScale = d3.scalePoint()//scalepoint,scaleLinear
        .domain(data.map(d => d.roll_id))//hace una barra por framework
        .range([0,this.contentWidth]) // output
        // .domain([0, Math.max.apply(Math, data.map(roll => roll.position))]); // input [0, data.length]

    // 6. Y scale will use the randomly generate number
    var yScale = d3.scaleLinear()
      .domain([0,240])// data.map(d => d.FilmTension)rango y tomando cada posicion input
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

    var line3 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) 
      .y(function (d: any) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX) 
      // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    var dataset =data.map((roll)=>{
      return {y:roll.Setpoint,x:roll.roll_id
      }
    })
    var dataset2 =data.map((roll)=>{
      return {y:roll.Actual,x:roll.roll_id
      }
    })

    var dataset3 =data.map((roll)=>{
      return {y:roll.Drives,x:roll.roll_id
      }
    })
    //d3.range(data.length).map(function (d) { return { "y": d3.randomUniform(300)() } })
    // console.log(dataset)
//{ "y": d3.randomUniform(300)() }
    // 3. Call the x axis in a group tag
    this.g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + 0 + "," + this.contentHeight + ")")
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom
    this.g.selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
    .style("font-size",".8em");
    // 4. Call the y axis in a group tag
    this.g.append("g")
      .attr("class", "y axis")
      // .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    // 9. Append the path, bind the data, and call the line generator
    this.g.append("path")
      .datum(dataset ) // 10. Binds data to the line
      .attr("class", "line") // Assign a class for styling
      .attr("d", line); // 11. Calls the line generator

  //  adding chart line 2
    this.g.append("path")
      .datum(dataset2 )
      .attr("class", "line2")
      .attr("d", line2);

  //    adding chart line 3

    this.g.append("path")
      .datum(dataset3 )
      .attr("class", "line3")
      .attr("d", line3);
  
  }


}
