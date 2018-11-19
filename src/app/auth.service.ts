import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { global } from '../variables/global';
import { v4 as uuid } from 'uuid';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  shopArray: string[];

  constructor
    (private cookieService: CookieService,
    private authService: AuthService
    ) {
    let user = this.cookieService.get(global.USER);
    if (user == null || user == '') {
      this.cookieService.set(global.USER, uuid());
    }
  }

  submitIntroduction() {
    this.cookieService.set('subIntro', 'true');
  }

  submitHedSurvey() {
    this.cookieService.set('subHed', 'true');
  }

  submitExpSurvey() {
    this.cookieService.set('subExp', 'true');
  }

  submitUtSurvey() {
    this.cookieService.set('subUt', 'true');
  }

  submitCredSurvey() {
    this.cookieService.set('subCred', 'true');
  }

  getSubmitIntroduction() {
    if (this.cookieService.get('subIntro') != null
      && this.cookieService.get('subIntro') != '') {
      return true;
    } else {
      return false;
    }
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

  getSubmitCredSurvey() {
    if (this.cookieService.get('subCred') != null
      && this.cookieService.get('subCred') != '') {
      return true;
    } else {
      return false;
    }
  }

  getSubmitFinalSurvey() {
    if (this.cookieService.get('subFinal') != null
      && this.cookieService.get('subFinal') != '') {
      return true;
    } else {
      return false;
    }
  }

  finishedHedShop() {
    this.cookieService.set('finHed', 'true');
  }

  finishedExpShop() {
    this.cookieService.set('finExp', 'true');
  }

  finishedUtShop() {
    this.cookieService.set('finUt', 'true');
  }

  finishedCredShop() {
    this.cookieService.set('finCred', 'true');
  }

  getFinHedShop() {
    if (this.cookieService.get('finHed') != null
      && this.cookieService.get('finHed') != '') {
      return true;
    } else {
      return false;
    }
  }

  getFinExpShop() {
    if (this.cookieService.get('finExp') != null
      && this.cookieService.get('finExp') != '') {
      return true;
    } else {
      return false;
    }
  }

  getFinUtShop() {
    if (this.cookieService.get('finUt') != null
      && this.cookieService.get('finUt') != '') {
      return true;
    } else {
      return false;
    }
  }

  getFinCredShop() {
    if (this.cookieService.get('finCred') != null
      && this.cookieService.get('finCred') != '') {
      return true;
    } else {
      return false;
    }
  }

  getFinFinalSurvey() {
    if (this.cookieService.get('finFinal') != null
      && this.cookieService.get('finFinal') != '') {
      return true;
    } else {
      return false;
    }
  }

  setUser(userValue: string) {
    this.cookieService.set(global.USER, userValue);
  }

  getUser() {
    return this.cookieService.get(global.USER);
  }

  getRandomShop() {
    let shopArray = [
      environment.basePathHed,
      environment.basePathExp,
      environment.basePathCred,
      environment.basePathUt
    ];

    if (this.getSubmitHedSurvey()) {
      shopArray.splice(shopArray.indexOf(environment.basePathHed), 1);
    }
    if (this.getSubmitExpSurvey()) {
      shopArray.splice(shopArray.indexOf(environment.basePathExp), 1);
    }
    if (this.getSubmitUtSurvey()) {
      shopArray.splice(shopArray.indexOf(environment.basePathUt), 1);
    }
    if (this.getSubmitCredSurvey()) {
      shopArray.splice(shopArray.indexOf(environment.basePathCred), 1);
    }

    if (shopArray.length >= 1) {
      var randomNumber = Math.floor(Math.random() * shopArray.length);
      var randomShop = shopArray[randomNumber];
      return randomShop;
    } else {
      return 'final-survey';
    }
  }
}
