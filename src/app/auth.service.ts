import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { global } from '../variables/global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor
    (
    private cookieService: CookieService
    ) { }

  submitHedSurvey() {
    this.cookieService.set('subHed', 'true');
  }

  submitExpSurvey() {
    this.cookieService.set('subExp', 'true');
  }

  submitUtSurvey() {
    this.cookieService.set('subUt', 'true');
  }

  getSubmitHedSurvey() {
    if (this.cookieService.get('subHed') != null
      && this.cookieService.get('subHed') != '') {
      return true;
    } else {
      return false;
    }
  }

  getSubmitExpSurvey() {
    if (this.cookieService.get('subExp') != null
      && this.cookieService.get('subExp') != '') {
      return true;
    } else {
      return false;
    }
  }

  getSubmitUtSurvey() {
    if (this.cookieService.get('subUt') != null
      && this.cookieService.get('subUt') != '') {
      return true;
    } else {
      return false;
    }
  }

  setUser(userValue: string) {
    this.cookieService.set(global.USER, userValue);
  }

  getUser() {
    let user = this.cookieService.get(global.USER);
    if (user != null && user != '') {
      return user;
    } else {
      return null;
    }
  }

}
