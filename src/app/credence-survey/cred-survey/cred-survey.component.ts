import { Component, OnInit } from '@angular/core';
import { CredDataService } from '../../credence-shop/cred-data.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cred-survey',
  templateUrl: './cred-survey.component.html',
  styleUrls: ['./cred-survey.component.css']
})
export class CredSurveyComponent implements OnInit {
  
  max: number = 5;
  ratedProducts = [];
  randomProducts = [];
  basePath: string;

  constructor(
    private dataService: CredDataService,
    private authService: AuthService,
    private router: Router
  ) { 
    this.basePath = environment.basePathCred;
  }

  ngOnInit() {
    this.dataService.getRandomProducts().subscribe(
      data => {
        this.randomProducts = data;
        this.randomProducts.forEach(element => {
          element.Score = 0;
        });
      }
    );
  }

  onSubmitClick() {
    let userId = null;
    if (this.authService.getUser() == null) {
      userId = uuid();
      this.authService.setUser(userId);
    } else {
      userId = this.authService.getUser();
    }
    this.dataService.submitUserRatings(userId, this.ratedProducts).subscribe(
      data => {
        this.authService.submitCredSurvey();
        this.router.navigateByUrl('/' + this.basePath);
      });
  }

  rate = 0;
  isReadonly = false;

  overStar: number;
  percent: number;

  hoveringOver(value: number): void {
    this.overStar = value;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

  onRatingClicked(product: any) {
    if(!this.ratedProducts.includes(product)){
      this.ratedProducts.push(product);
    }
  }

}
