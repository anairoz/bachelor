
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  minLen = 6;
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

  usernameFormControl = new FormControl ('', [
    Validators.required,
    Validators.minLength(this.minLen),
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minLen),
  ])

}
