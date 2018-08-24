import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CredAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.getSubmitCredSurvey() && !this.authService.getFinCredShop()) {
      return true;
    } else if(!this.authService.getSubmitCredSurvey()){
      this.router.navigate(['/cred-survey']);
      return false;
    } else if(this.authService.getFinCredShop()){
      this.router.navigate(['/final-survey']);
      return false;
    }
  }
}
