import { Component, OnInit } from '@angular/core';
import { TitleService} from './../../../core/services/title.service';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';
@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})

export class MenuIconComponent implements OnInit {
  menuOpened=false;
  titleInput:string='';
  message$:string;
  subscription: Subscription
  constructor(private titleService:TitleService, private router: Router,) { }

  ngOnInit(): void {
    this.subscription = this.titleService.currentTitle$.subscribe(message=>this.message$=message)
  }
  menuOpenedHandler(){
      this.menuOpened=true;
   }
 
   menuClosedHandler(){
    this.menuOpened=false;
   }
   newTitle(titleInput:string) {
     //call the title service method . setTitle to past the string from the anchor
    this.titleService.setTitle(titleInput);
    this.router.navigate(['./reports',this.message$])//al crear el pdto me lleva a la lista para ver ALL
  }
}
