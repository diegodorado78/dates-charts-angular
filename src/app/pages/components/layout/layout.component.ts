import { Component, OnInit,Input } from '@angular/core';
import {MatDrawerMode} from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() showFiller: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  sidenavToggle(event){
    console.log(event)
  }
}
