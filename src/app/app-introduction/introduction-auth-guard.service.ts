import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class IntroductionAuthGuardService {

  constructor(
    private authService: AuthService
  ) { }

  canActivate() {
    if(!this.authService.getSubmitIntroduction()){
      return true;
    } else {
      return false;
    }
  }
}
