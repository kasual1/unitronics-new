import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExpSurveyAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (!this.authService.getSubmitExpSurvey()) {
      return true;
    } else {
      this.router.navigate(['/experienced']);
      return false;
    }
  }
}
