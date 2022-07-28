import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {
  private toggleState=new BehaviorSubject(false);

  toggleState$= this.toggleState.asObservable();
  constructor() { }

  setToggleState(state){
    this.toggleState.next(state)
    console.log(state);

}
}
