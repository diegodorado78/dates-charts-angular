import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dates } from '@models/date.model';
 @Injectable({
  providedIn: 'root'
})

export class DatesService {

  constructor() { }
  currentData:Dates={startDate:"2018/01/01",endDate:"2018/01/03"};
  dataSource:BehaviorSubject<Dates>= new BehaviorSubject<Dates>({startDate:"",endDate:""});
  data:Observable<Dates>=this.dataSource.asObservable();
  dateDto:any;

  public addDate(date:any){
   return this.dataSource.next(date);
  }

}

