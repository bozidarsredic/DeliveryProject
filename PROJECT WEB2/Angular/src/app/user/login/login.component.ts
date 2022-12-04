import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Login } from './../../shared/models/login.model';
import { Token } from 'src/app/shared/models/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    Email : new FormControl("a@a", [Validators.required , Validators.email]),
    Password : new FormControl("aaaaa", Validators.minLength(5)),
  });
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  onSubmit() {
    let login:Login = new Login();

    login.email = this.loginForm.controls['Email'].value;
    login.password = this.loginForm.controls['Password'].value;
    localStorage.setItem('emaill',  login.email);


    this.service.login(login).subscribe(
      (data : Token) => {
        localStorage.setItem('token', data.token);

       this.router.navigateByUrl('/ud');
      },
      error => {
          this.toastr.error('Incorrect email or password.', 'Authentication failed.');
      }
    );
  }
}
