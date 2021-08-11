import {Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-kpi-line',
  templateUrl: './kpi-line.component.html',
  styleUrls: ['./kpi-line.component.scss']
})
export class KpiLineComponent implements OnInit {
@Input() line= Input(); // para resolver problema de strict mode

  ngOnInit(): void {
     }

}
