import { Injectable } from '@angular/core';
import { SignIn } from '../Models/SignIn.model';
import { Register } from '../Models/Register.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private router: Router) {}
  signIn(user: SignIn) {
    this.http
      .post('https://localhost:44386/api/Account/SignIn', user, {
        responseType: 'text',
      })
      .subscribe((d) => {
        if (d) {
          localStorage.setItem('JWTKEY', d);
          this.router.navigate(['/']);
        }
      });
  }
  Register(user: Register) {
    this.http
      .post('https://localhost:44386/api/Account/Register', user, {
        responseType: 'text',
      })
      .subscribe((d) => {});
  }
}
