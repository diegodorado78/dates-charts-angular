import { Component, OnInit,Input,Output,EventEmitter,OnDestroy } from '@angular/core';
import {LinesService} from '@services/lines.service';

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.scss']
})
export class KpisComponent implements OnInit {
 lines =[];
@Input() line:any = Input(); // para resolver problema de strict mode
@Output() lineClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private linesService: LinesService) { }
 clickLine(id: Event){// @output emite el id
    console.log(id); //
  }
  ngOnInit(): void {
     this.lines = this.linesService.getAllLines(); // traigo a productos los datos con el metodo getAllProducts del service
     console.log(this.lines);
  }


}
