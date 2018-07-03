import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtSurveyAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (!this.authService.getSubmitUtSurvey()) {
      return true;
    } else {
      this.router.navigate(['/utilitarian']);
      return false;
    }
  }
}
