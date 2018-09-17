import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HedAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.getSubmitHedSurvey() && !this.authService.getFinHedShop()) {
      return true;
    } else if(!this.authService.getSubmitHedSurvey()) {
      this.router.navigate(['/' + environment.basePathHedSurvey]);
      return false;
    } else if(this.authService.getFinHedShop()) {
      this.router.navigate(['/' + environment.basePathExpSurvey]);
      return false;
    }
  }
}
