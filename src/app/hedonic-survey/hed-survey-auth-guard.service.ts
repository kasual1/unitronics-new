import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HedSurveyAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if(!this.authService.getSubmitHedSurvey()){
      return true;
    } else {
      this.router.navigate(['/' +  environment.basePathHed]);
      return false;
    }
  }
}
