import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _HttpClient: HttpClient, private Router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,
    Validators.pattern('^[A-Za-z0-9@&]{3,8}$')]),
  })

  login() {
    this._HttpClient.get<any>("http://localhost:3000/signUpUser").subscribe((res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user) {
        alert("login success");
        console.log("login action");
        localStorage.setItem('token', Math.random().toString());
        this.loginForm.reset();
        this.Router.navigate(['home']);

      } else {
        alert("user not found")
      }
    }))
  }

}
