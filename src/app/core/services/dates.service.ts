import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dates } from 'src/app/date.model';

 @Injectable({
  providedIn: 'root'
})

export class DatesService {

  constructor() { }
  currentData:Dates={startDate:"",endDate:""};
  private dateObservable:BehaviorSubject<Dates> = new BehaviorSubject({startDate:"2018/1/1",endDate:new Date()});//debe tener un valor inicial
  dateData$=this.dateObservable.asObservable();
//buena practica: getters y setters
  public get getDate(){//obtengo el mismo observable pero modificado a mi gusto
    return this.dateObservable.asObservable();// convierte el objeto en solo visible o escuchable No modificable
  }
  public addDate(data:Dates){
    this.currentData=data;
    this.dateObservable.next(this.currentData)//actualizo en estado del obsevable con los valores que pase
  }
}
 //metodos creados de la forma comun
  // getDateObservable(){
  //   return this.dateObservable.asObservable();// convierte el objeto en solo visible o escuchable No modificable
  // }
  // setDateObeservable(data:Dates){
  //   this.dateObservable.next(data)//actualizo en estado del obsevable con los valores que pase

  // }
