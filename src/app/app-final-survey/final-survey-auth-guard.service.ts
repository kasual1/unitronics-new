import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FinalSurveyAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (!this.authService.getSubmitFinalSurvey()) {
      return true;
    } else {
      this.router.navigate(['/credence']);
      return false;
    }
  }

}
