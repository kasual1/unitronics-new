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
    if (this.authService.getSubmitCredSurvey()) {
      return true;
    } else {
      this.router.navigate(['/cred-survey']);
      return false;
    }
  }
}
