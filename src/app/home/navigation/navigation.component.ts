import { Component, OnInit } from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  public open:boolean = false;


  ngOnInit(): void {
  }
  toggle(){
    this.open = !this.open;
  }
  openSignUpDialog() {
    console.log('signin')
    const dialogRef = this.dialog.open(SignUpComponent, {
        width: '450px',
        data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });

}
openLogInDialog() {
    console.log('lol1')
    const dialogRef = this.dialog.open(LogInComponent, {
        width: '350px',
        data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
}
}
