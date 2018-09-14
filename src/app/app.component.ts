import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';
import { RecommenderExperiment } from './app-experiments/recommender-experiment';
import { LoggerService } from './logger.service';

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
    private loggerService: LoggerService
  ) {
    // Initialize User
    let user = this.authService.getUser();
    console.log('User: ' + user);

    // Initialize the Experiment 
    this.experiment = new RecommenderExperiment({ userId: user });
    this.recommenderType = this.experiment.get('recommenderType');
    console.log('Recommender Type: ' + this.recommenderType);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let pathArray = event.urlAfterRedirects.split('/');
        console.log(pathArray);
        let data = {
          SessionId: this.authService.getUser(),
          Timestamp: Date.now(),
          Url: event.urlAfterRedirects,
          Event: "view",
          Source: null,
          Treatment: this.recommenderType,
          Shop: pathArray[1],
          ProductId: pathArray[3]
        }
        this.loggerService.log(data).subscribe(() =>{

        });
      }
    });

  }

  ngOnInit(): void {

  }

}


