import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsDialogComponent } from '../notifications-dialog/notifications-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
bcoLogo:string = './../../../../assets/images/bco-logo-white.png'
 notification:number=0
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
openDialog(){
this.dialog.open(NotificationsDialogComponent);
}
}
