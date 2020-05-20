import { Component, OnInit } from '@angular/core';
import { LogOutComponent } from './log-out/log-out.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-in-app-nav',
  templateUrl: './in-app-nav.component.html',
  styleUrls: ['./in-app-nav.component.scss']
})
export class InAppNavComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  public open:boolean = false;


  ngOnInit(): void {
  }
  toggle(){
    this.open = !this.open;
  }

openLogOutDialog(){
    console.log('lol1')
    const dialogRef = this.dialog.open(LogOutComponent, {
        width: '350px',
        data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
}
}
