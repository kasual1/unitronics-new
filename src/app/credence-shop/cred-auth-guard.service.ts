import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CredAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.getSubmitCredSurvey() && !this.authService.getFinCredShop()) {
      return true;
    } else if(!this.authService.getSubmitCredSurvey()){
      this.router.navigate(['/' + environment.basePathCredSurvey]);
      return false;
    } else {
      return false;
    }
  }
}
