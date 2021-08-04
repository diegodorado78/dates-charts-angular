import { Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import * as d3 from 'd3';
import { WinderService } from 'src/app/core/services/winder.service';
@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.scss']
})
export class Chart4Component implements OnInit {
titulo='Contact Winding';
 private contactWinding:any= [];
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
  constructor(private winderService:WinderService) { }
  ngOnInit(): void {
    this.contactWinding =this.winderService.getAllContactWinding();
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
    var data =this.contactWinding;
    var dataRange= data.map((x)=>x.roll_id);
    console.log(dataRange);
    // 5. X scale will use the index of our data
    var xScale = d3.scalePoint()//scalepoint,scaleLinear
        .domain(data.map(d => d.roll_id))//hace una barra por framework
        .range([0,this.contentWidth]) // output
        // .domain([0, Math.max.apply(Math, data.map(roll => roll.position))]); // input [0, data.length]

    // 6. Y scale will use the randomly generate number
    var yScale = d3.scaleLinear()
      .domain([0,200])// data.map(d => d.FilmTension)rango y tomando cada posicion input
      .range([this.contentHeight, 0]); // output
    // 7. d3's line generator
    var line = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) // set the x values for the line generator
      .y(function (d: any) { return yScale(d.y); }) // set the y values for the line generator
      .curve(d3.curveMonotoneX) // apply smoothing to the line

    var line2 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) // set the x values for the line generator
      .y(function (d: any) { return yScale(d.y); }) // set the y values for the line generator
      .curve(d3.curveMonotoneX) // apply smoothing to the line

    var line3 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) // set the x values for the line generator
      .y(function (d: any) { return yScale(d.y); }) // set the y values for the line generator
      .curve(d3.curveMonotoneX) // apply smoothing to the line

      var line4 = d3.line()
      .x(function (d:any, i:any) { return xScale(d.x); }) // set the x values for the line generator
      .y(function (d: any) { return yScale(d.y); }) // set the y values for the line generator
      .curve(d3.curveMonotoneX) // apply smoothing to the line

      // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    var dataset =data.map((roll)=>{
      return {y:roll.w1Tensionp1,x:roll.roll_id
      }
    })
    var dataset2 =data.map((roll)=>{
      return {y:roll.w2Tensionp1,x:roll.roll_id
      }
    })
    var dataset3 =data.map((roll)=>{
      return {y:roll.w1Tensionp2,x:roll.roll_id
      }
    })
    var dataset4 =data.map((roll)=>{
      return {y:roll.w2Tensionp2,x:roll.roll_id
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
      .attr("class", "winder__c4-line1") // Assign a class for styling
      .attr("d", line); // 11. Calls the line generator

  //  agregar segunda linea al chart
    this.g.append("path")
      .datum(dataset2 )
      .attr("class", "winder__c4-line2")
      .attr("d", line2);

      this.g.append("path")
      .datum(dataset3 )
      .attr("class", "winder__c4-line3")
      .attr("d", line3);

      this.g.append("path")
      .datum(dataset4 )
      .attr("class", "winder__c4-line4")
      .attr("d", line4);


  }

}
