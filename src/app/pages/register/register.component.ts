import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _HttpClient: HttpClient, private Router: Router) { }

  RegisterForm = new FormGroup({

    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,
    Validators.pattern('^[A-Za-z0-9@&]{3,8}$')]),
  })

  RegisterSubmit() {
    this._HttpClient.post<any>("http://localhost:3000/signUpUser", this.RegisterForm.value).subscribe((res => {
      alert('signUp Success');
      this.RegisterForm.reset();
      this.Router.navigate(['login']);

    }))
  }
}
