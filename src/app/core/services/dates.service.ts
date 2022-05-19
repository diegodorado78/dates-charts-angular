import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatesService {

  constructor() { }
  public startDateDetails: any = [];
  public endDateDetails: any = [];

  public startDateSubject = new Subject<any>();
  public endDateSubject = new Subject<any>();
  private startDateSource = new BehaviorSubject(this.startDateDetails);//debe tener un valor inicial en este caso un string vacio
  private endDateSource = new BehaviorSubject(this.endDateDetails);//debe tener un valor inicial en este caso un string vacio

  currentStartDate = this.startDateSource.asObservable();
  currentEndDate = this.endDateSource.asObservable();

  changeMessage(startMessage: string, endMessage: string) {
    this.startDateSource.next(startMessage)
    this.endDateSource.next(endMessage)

  }
}
