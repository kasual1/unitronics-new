import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinalSurveyAuthGuardService {

  basePath: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.basePath = environment.basePathCred;
   }

  canActivate() {
    if (!this.authService.getSubmitFinalSurvey()) {
      return true;
    } else {
      this.router.navigate(['/' + this.basePath]);
      return false;
    }
  }

}
