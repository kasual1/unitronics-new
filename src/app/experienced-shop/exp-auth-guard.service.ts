import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExpAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.getSubmitExpSurvey() && !this.authService.getFinExpShop()) {
      return true;
    } else if(!this.authService.getSubmitExpSurvey()) {
      this.router.navigate(['/' + environment.basePathExpSurvey]);
      return false;
    } else if(this.authService.getFinExpShop()){
      this.router.navigate(['/' + environment.basePathUtSurvey]);
      return false;
    }
  }
}
