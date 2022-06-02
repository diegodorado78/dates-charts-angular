import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dates } from '@models/date.model';

 @Injectable({
  providedIn: 'root'
})

export class DatesService {

  constructor() { }
  currentData:Dates={startDate:"12/2/2022",endDate:"y"};
  private dateData= new BehaviorSubject<Dates>(this.currentData);//debe tener un valor inicial
  dateData$=this.dateData.asObservable();
  dateDto:any;

  public addDate(data:Dates){
    // this.currentData=data;
    // this.dateDto=data;
    this.dateData.next(data)//actualizo en estado del obsevable con los valores que pase
  }
}
 //metodos creados de la forma comun
  // getDateObservable(){
  //   return this.dateObservable.asObservable();// convierte el objeto en solo visible o escuchable No modificable
  // }
  // setDateObeservable(data:Dates){
  //   this.dateObservable.next(data)//actualizo en estado del obsevable con los valores que pase

  // }
