import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinesService {
private lines = [
{ //declaro que el array va a ser tipo products only
      id: '1',
      lineImage: '../../../assets/images/line.png',
      rollImage: '../../../assets/images/gRoll.png',
      productImage: '../../../assets/images/product.png',
      number: '#11',
      description: 'bla bla bla bla bla',

    },
    {
      id: '2',
      lineImage: '../../../assets/images/line.png',
      rollImage: '../../../assets/images/gRoll.png',
      productImage: '../../../assets/images/product.png',
      number: '#7',
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      lineImage: '../../../assets/images/line.png',
      rollImage: '../../../assets/images/gRoll.png',
      productImage: '../../../assets/images/product.png',
      number: '#5',
      description: 'bla bla bla bla bla'
    },
]
  constructor() { }

   getAllLines(){
    return this.lines;
  }
  getLine(id:string){
    return this.lines.find(item=>id=== item.id); // busca y devuelve el item del param id
  }
 
}


