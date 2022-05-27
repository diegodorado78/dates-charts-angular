import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dates } from '@models/date.model';

 @Injectable({
  providedIn: 'root'
})

export class DatesService {

  constructor() { }
  // currentData:Dates={startDate:"",endDate:""};
  private dateData= new BehaviorSubject<Dates>({startDate:"xx",endDate:"yy"});//debe tener un valor inicial
  dateData$=this.dateData.asObservable();
//buena practica: getters y setters
  public getDate(){//obtengo el mismo observable pero modificado a mi gusto
    return this.dateData$;// convierte el objeto en solo visible o escuchable No modificable
  }
  public addDate(data:Dates){
    // this.currentData=data;
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
