import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ExpDataService } from '../../experienced-shop/exp-data.service';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-exp-survey',
  templateUrl: './exp-survey.component.html',
  styleUrls: ['./exp-survey.component.css']
})
export class ExpSurveyComponent implements OnInit {
  
  counter: number = 5;
  ratedProducts = [];

  constructor(
    private dataService: ExpDataService,
    private cookieService: CookieService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getRandomProducts().subscribe(
      data => {
        this.ratedProducts = data;
        this.ratedProducts.forEach(element => {
          element.Score = 0;
        });
      });

  }

  onRatingChange = ($event: any, product: any) => {
    console.log('onRatingUpdated $event: ', $event, product.name);
    product.Score = $event.rating;
    if (this.counter > 0) {
      this.counter--;
    }
    console.log(product);
  };


  onSubmitClick() {
    let userId = null;
    if (this.authService.getUser() == null) {
      userId = uuid();
      this.authService.setUser(userId);
    } else {
      userId = this.authService.getUser();
    }
    console.log(userId, this.ratedProducts);
    this.dataService.submitUserRatings(userId, this.ratedProducts).subscribe(
      data => {
        this.authService.submitExpSurvey();
        this.router.navigateByUrl('/experienced');
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
    if (this.counter > 0) {
      this.counter--;
    }
  }

}
