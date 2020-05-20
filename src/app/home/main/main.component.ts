import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from "../navigation/sign-up/sign-up.component";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
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
}
