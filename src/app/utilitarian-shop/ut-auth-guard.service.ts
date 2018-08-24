import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.getSubmitUtSurvey() && !this.authService.getFinUtShop()) {
      return true;
    } else if(!this.authService.getSubmitUtSurvey()){
      this.router.navigate(['/ut-survey']);
      return false;
    } else if(this.authService.getFinUtShop()){
      this.router.navigate(['/cred-survey']);
      return false;
    }
  }
}
