import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroductionAuthGuardService {

  constructor() { }

  canActivate() {
    if (true) {
      return true;
    } else {
      return false;
    }
  }
}
