import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CredSurveyAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if(!this.authService.getSubmitCredSurvey()){
      return true;
    } else {
      this.router.navigate(['/' + environment.basePathCred]);
      return false;
    }
  }
}
