import { Component } from '@angular/core';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginData = { username: '', password: '' };
  message: string = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.loginData).subscribe(() => {
      if (!localStorage.getItem('token')) {
        this.message = 'Wrong username or password!';
      }
    });
  }

}
