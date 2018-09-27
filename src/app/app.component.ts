import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';
import { RecommenderExperiment } from './app-experiments/recommender-experiment';
import { LoggerService } from './logger.service';
import { global } from '../variables/global';
import { LocationChangeEvent, Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private experiment: RecommenderExperiment;
  private recommenderType: string; // Contains the variant that is displayed to the user 

  constructor(
    private router: Router,
    private authService: AuthService,
    private loggerService: LoggerService,
    private location: Location
  ) {

    if (global.SHOW_SURVEYS == false) {
      console.log('Surveys will be hidden!');
      this.authService.setUser('dca22ed6-6225-4650-aba5-c343728eb303');
      this.authService.submitHedSurvey();
      this.authService.submitExpSurvey();
      this.authService.submitUtSurvey();
      this.authService.submitCredSurvey();
    }

    // Initialize User
    let user = this.authService.getUser();
    console.log('User: ' + user);

    // Initialize the Experiment 
    this.experiment = new RecommenderExperiment({ userId: user });
    this.recommenderType = this.experiment.get('recommenderType');
    console.log('Recommender Type: ' + this.recommenderType);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let matchesParams = event.urlAfterRedirects.match('src=([^&]*)');
        let params = matchesParams != null ? matchesParams[1] : null;

        let productId = parseInt(event.urlAfterRedirects.split('/')[3]);
        productId = isNaN(productId) ? null : productId;

        let source = null;
        if (params != null) {
          this.location.replaceState(event.url.replace(/\?src=.+/, ''));
          switch (params) {
            case 'r':
              source = 'recommender';
              break;
            case 'os':
              source = 'on sale';
              break;
            case 'bb':
              source = 'big banner';
              break;
            case 'c':
              source = 'cart';
              break;
            case 's':
              source = 'search';
              break;
          }
        }
        this.loggerService.log('view', event.urlAfterRedirects, source, productId, null).subscribe((result: any) => {
        });

      }
    });

  }

  ngOnInit(): void {
  }

}


