import { Component, OnInit} from '@angular/core';
import { DatesService } from '@services/dates.service';
import { Observable,Subscription } from 'rxjs';
import {Dates} from '@models/date.model';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.scss']
})
export class DieComponent implements OnInit {
  //  dateData$:Observable<Dates>;

  constructor() {

  }
  ngOnInit(){
  }

}
