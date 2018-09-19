import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { RecommenderExperiment } from './app-experiments/recommender-experiment';
import { LoggerService } from './logger.service';
import { Log } from './app-models/log';
import { forkJoin } from 'rxjs';

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
    private route: ActivatedRoute,
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
        this.route.params.subscribe(params => {
          this.loggerService.log('view', event.urlAfterRedirects).subscribe((result: any) => {
          });
        });
      }
    });

  }

  ngOnInit(): void {

  }

}


