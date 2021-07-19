import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { LinesService } from 'src/app/core/services/lines.service';
@Component({
  selector: 'app-kpis',
  templateUrl: './kpis-content.component.html',
  styleUrls: ['./kpis-content.component.scss']
})
export class KpisContentComponent implements OnInit {
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

public bar:any= document.getElementById('lineData');
size:string=''
constructor( private route: ActivatedRoute, private linesService: LinesService) // inyeccion de dependencias activatedroute) { }
{}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id; // guardo el id que pasamos como param para usarlo en el metodo
      this.line = this.linesService.getLine(id); // as product x indicar el tipo de resp que espero al llamar al service
      // llamo al metodo get product del service
    }); //
  }
  // metodos para actualizar la data
  updateYield(){
    this.upLabel1='4,215'
    this.upLabel2= ''
    this.upLabel3= 'Total Material'
    this.upUnid="kg"
    this.upUnid2=''
    this.downLabel1= '1,270'
    this.downLabel2=''
    this.downLabel3='Good Roll'
    this.downUnid="kg"
    this.downUnid2=''
    this.size='22.5'
  }
  updateUptime(){
    this.upLabel1='893'
    this.upLabel2= '09'
    this.upLabel3= 'Total Time'
    this.upUnid="d"
    this.upUnid2="h"
    this.downLabel1= '893'
    this.downLabel2= '07'
    this.downLabel3='Production'
    this.downUnid="d"
    this.downUnid2="h"
     this.size='75'
  }
  updateCapacity(){
    this.upLabel1='6,160'
    this.upLabel2= ''
    this.upLabel3= 'Normal Output'
    this.upUnid="kg/h"
    this.upUnid2=""
    this.downLabel1= '4,176'
    this.downLabel2= ''
    this.downLabel3='Output on Winder'
    this.downUnid="kg/h"
    this.downUnid2=''
    this.size='51'

  }


}
