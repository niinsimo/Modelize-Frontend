import { Component } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor() {}

  userData() {
    const helper = new JwtHelperService();

    try {
      return helper.decodeToken(localStorage.getItem('token'));
    }
    catch (error) {
      throw Error(error);
    }
  }

}
