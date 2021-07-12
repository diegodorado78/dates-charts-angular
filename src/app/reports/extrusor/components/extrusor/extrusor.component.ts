import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {ExtrusorService} from '../../../../core/services/extrusor.service'
@Component({
  selector: 'app-extrusor',
  templateUrl: './extrusor.component.html',
  styleUrls: ['./extrusor.component.scss']
})
export class ExtrusorComponent implements OnInit {
public titulo="Extrusor";
data2 =[];
private line: any;
  private svg:any;
  private d:any;
  private margin = 30;
  private width = 800- this.margin ;
  private height = 350- this.margin ;

  constructor(private extrusorService:ExtrusorService ) {} // instacncio el service para que este disponible en el onINIT
// metodo para seleccionar el elemnto del dom e insertar el svg
private createSvg(): void {
    this.svg = d3.select("figure#bar")//selecciona tag figure con id bar
    .append("svg")
    .attr("width", this.width + (this.margin*2 ))
    .attr("height", this.height + (this.margin*5))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
// metodo para agregar las barras usando la propieda svg
private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.roll_id))//hace una barra por framework
    .padding(0.3);

    // Draw the X-axis on the DOM
    this.svg.append("g")//agrega info y agrupa el svg la figura que antes cree
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Crea la banda scala del eje y
    const y = d3.scaleLinear()
    .domain([0, 220])
    .range([this.height, 0]);

    // Dibuja el eje y en el dom
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Crea y llena las barras
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d:any) => x(d.roll_id))
    .attr("y", (d:any) => y(d.set_point))
    .attr("width", x.bandwidth())
    .attr("height", (d:any) => this.height - y(d.set_point))//altura de la barra
    .attr("fill", "blue");
// Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
    .data(this.data2)
    .enter()
    .append("circle")
    .attr("cx", (d:any) => x(d.roll_id))
    .attr("cy", (d:any)=> y(d.controller))
    .attr("r", 5)
    .style("opacity", 1)
    .style("fill", "red");

    dots.selectAll("text")
    .data(this.data2)
    .enter()
    // .append("text")
    // .text((d:any) => d.roll_id)
    .attr("x", (d:any) => x(d.roll_id))
    .attr("y", (d:any) => y(d.controller))
//add line

}
//llamo los metodos en el onInit
  ngOnInit(): void {
    this.data2= this.extrusorService.getAllDataPoints();
    this.createSvg();//crea y pinta el chart en el dom
    this.drawBars(this.data2);//dibuja las barras con la info
  }


}
