import { Component, OnInit } from '@angular/core';

import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';
@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})

export class MenuIconComponent implements OnInit {
  menuOpened=false;

  constructor() { }

  ngOnInit(): void {
  }
  menuOpenedHandler(){
      this.menuOpened=true;
   }
 
   menuClosedHandler(){
    this.menuOpened=false;

   }
}
