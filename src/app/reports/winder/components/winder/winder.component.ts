import { Component, OnInit} from '@angular/core';
import { DatesService } from '@services/dates.service';
import { Dates } from '@models/date.model';


@Component({
  selector: 'app-winder',
  templateUrl: './winder.component.html',
  styleUrls: ['./winder.component.scss']
})
export class WinderComponent implements OnInit {
  selectedDate:Dates;


constructor(private datesService:DatesService){}
ngOnInit(){
  this.fetchDate()
}
fetchDate() {
  this.datesService.data.subscribe(date => {
    this.selectedDate = date
  });
}
}
