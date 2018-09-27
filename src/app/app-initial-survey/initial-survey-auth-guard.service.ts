import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitialSurveyAuthGuardService {

  constructor(
  ) { }

  canActivate() {
    if (true) {
      return true;
    } else {
      return false;
    }
  }
}
