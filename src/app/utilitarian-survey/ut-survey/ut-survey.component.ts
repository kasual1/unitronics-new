import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { UtDataService } from '../../utilitarian-shop/ut-data.service';
import { v4 as uuid } from 'uuid';
import { GoogleAnalyticsService } from '../../google-analytics.service';


@Component({
  selector: 'app-ut-survey',
  templateUrl: './ut-survey.component.html',
  styleUrls: ['./ut-survey.component.css']
})
export class UtSurveyComponent implements OnInit {
  max: number = 5;
  ratedProducts = [];
  randomProducts = [];

  constructor(
    private dataService: UtDataService,
    private authService: AuthService,
    private router: Router,
    private googleAnalyticsService: GoogleAnalyticsService
  ) { }

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
        this.authService.submitHedSurvey();
        this.router.navigateByUrl('/hedonic');
        this.googleAnalyticsService.sendInitialSurveyCompleted();
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
