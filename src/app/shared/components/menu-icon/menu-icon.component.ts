import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';
@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  goBack(){
    this._location.back();
  }
}
