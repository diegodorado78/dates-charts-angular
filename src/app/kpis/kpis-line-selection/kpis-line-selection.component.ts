import { Component, OnInit,Input,Output,EventEmitter,OnDestroy } from '@angular/core';
import {LinesService} from '../../core/services/lines.service';

@Component({
  selector: 'app-kpis-line-selection',
  templateUrl: './kpis-line-selection.component.html',
  styleUrls: ['./kpis-line-selection.component.scss']
})
export class KpisLineSelectionComponent implements OnInit {
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
