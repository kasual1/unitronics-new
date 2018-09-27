import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { InitialSurveyDataService } from '../initial-survey-data.service';
import { AuthService } from '../../auth.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-initial-survey',
  templateUrl: './initial-survey.component.html',
  styleUrls: ['./initial-survey.component.css']
})
export class InitialSurveyComponent implements OnInit {

  max: number = 40;
  ratedProducts = [];
  randomProducts = [];
  basePath: string;
  showSuccessMessage: boolean = false;

  constructor(
    private dataService: InitialSurveyDataService,
    private authService: AuthService
  ) { 
    this.basePath = environment.basePathHed;
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
        this.showSuccessMessage = true;
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
