import { Component } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  appTitle: string = 'Modelize';

  isLoggedIn$: Observable<boolean>;
  subscription: Subscription;
  isLoggedInBool: boolean;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isTokenInExistence();
    this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    this.subscription = this.isLoggedIn$
      .subscribe(bool => { this.isLoggedInBool = bool });

    return this.isLoggedInBool;
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
