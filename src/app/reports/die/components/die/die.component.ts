import { Component, OnInit} from '@angular/core';
import { DatesService } from '@services/dates.service';
import { Dates } from '@models/date.model';
@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.scss']
})
export class DieComponent implements OnInit {
  selectedDate:Dates;
  constructor(private datesService:DatesService) {
  }
  ngOnInit(){
    this.fetchDate()
  }
  fetchDate() {
    this.datesService.data.subscribe(date => {
      this.selectedDate = date
    });
  }
}
