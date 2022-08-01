import { tap } from 'rxjs/operators';
import { MenuToggleService } from '@services/menu-toggle.service';
import { Component, OnInit,Input,AfterViewInit, OnChanges,ViewChild} from '@angular/core';
import { Subscription,} from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  subscription: Subscription
  showFiller$=false;
   drawer:any=false;
   constructor(
    private router: Router,
    private menuToggleService:MenuToggleService,

    ) {

    }

    ngOnInit(): void {
      console.log(this.showFiller$);

     !this.showFiller$?(this.drawer.toggle()
    ):(this.showFiller$=false)
   };

    }
  // ngAfterViewInit(): void {



  // }




