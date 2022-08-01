import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsDialogComponent } from '../notifications-dialog/notifications-dialog.component';
import { MenuToggleService } from "@services/menu-toggle.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
 bcoLogo:string = '../../../../assets/images/bco-logo-white.png'
 notification:number=0;
 showFiller$: boolean;
 subscription: Subscription
 toggle = new EventEmitter<string>();
  constructor(public dialog:MatDialog,private menuToggleService:MenuToggleService) { }

  ngOnInit(): void {
    this.subscription = this.menuToggleService.toggleState$.subscribe(message=>this.showFiller$=message);

  }
openDialog(){
this.dialog.open(NotificationsDialogComponent);
}
toggleMenu(state){
this.menuToggleService.setToggleState(!state);
console.log(state);
console.log(!state);



}

}
