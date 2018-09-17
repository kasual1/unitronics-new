import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtAuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.getSubmitUtSurvey() && !this.authService.getFinUtShop()) {
      return true;
    } else if(!this.authService.getSubmitUtSurvey()){
      this.router.navigate(['/' + environment.basePathUtSurvey]);
      return false;
    } else if(this.authService.getFinUtShop()){
      this.router.navigate(['/' + environment.basePathCredSurvey]);
      return false;
    }
  }
}
