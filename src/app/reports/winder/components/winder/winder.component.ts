import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs'
import {Response} from '../../../../response.model'
import { WinderService } from 'src/app/core/services/winder.service';
import {WResponse} from '../../../../winderResponse.model'


@Component({
  selector: 'app-winder',
  templateUrl: './winder.component.html',
  styleUrls: ['./winder.component.scss']
})
export class WinderComponent implements OnInit {
  filmTensionData:Response[]=[];
  tensionControlData:Response[]=[];
  gapWindingData:WResponse[]=[];
  contactWindingData:WResponse[]=[];


constructor(private winderService:WinderService){}
ngOnInit(){
  // this.fetchData();

}

// fetchData=()=>{
//   // this.winderService.getAllDataPoints()
//   // .subscribe((response:Response[])=>{
//   //    this.filmTensionData = response['data'];
//   // })
//   this.winderService.getAllTensionControl()
//   .subscribe((response:Response[])=>{
//      this.tensionControlData = response['data'];
//   })
//   this.winderService.getAllGapWinding()
//   .subscribe((response:WResponse[])=>{
//      this.gapWindingData = response['data'];
//   })
//   this.winderService.getAllContactWinding()
//   .subscribe((response:WResponse[])=>{
//      this.contactWindingData = response['data'];
//   })
// }

}
//console.log de lo que devuelve
// function (d) { return { "y": d3.randomUniform(300)() }