import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HedAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.getSubmitHedSurvey()) {
      console.log('canActivate true');
      return true;
    } else {
      this.router.navigate(['/hed-survey']);
      console.log('canActivate false');
      return false;
    }
  }
}
