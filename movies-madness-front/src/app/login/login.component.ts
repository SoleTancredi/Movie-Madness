import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordControl: FormControl = new FormControl();
  password: string = '';

  ngOnInit(): void {
    this.passwordControl.valueChanges.subscribe((value: string) => {
      // Access the value of the password
      console.log(value);
    });

    //console.log('Login initiliazed');
  }
}
