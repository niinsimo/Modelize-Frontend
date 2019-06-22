import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private baseUrl = environment.baseUrl;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private data: any;
  private errorMessage = {};
  private token = localStorage.getItem('token');

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private http: HttpClient) {}

  login(loginData): Observable<object> {
    this.http.post(this.baseUrl + '/auth/local/login', loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('token', this.data.token);
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }, err => {
      this.errorMessage = { status: err.status, message: err.error || "Wrong username or password" };
      throwError(this.errorMessage);
    });

    return of(this.errorMessage);
  }

  logout() {
    this.http.post(this.baseUrl + '/auth/logout', {}).subscribe(() => {
      this.loggedIn.next(false);
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }, err => {
      this.errorMessage = { status: err.status, message: err.error.error };
      localStorage.removeItem('token');
      return throwError(this.errorMessage);
    });
  }

  isTokenInExistence(): Observable<boolean> {
    this.loggedIn.next(!!localStorage.getItem('token'));
    return this.loggedIn.asObservable();
  }


}
