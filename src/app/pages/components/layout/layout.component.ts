import { MenuToggleService } from '@services/menu-toggle.service';
import { Component, OnInit,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  subscription: Subscription
  showFiller$;
   constructor(
    private router: Router,
    private menuToggleService:MenuToggleService,

    ) { }

  ngOnInit(): void {
    this.subscription = this.menuToggleService.toggleState$.subscribe(message=>this.showFiller$=message);

  }
  }


