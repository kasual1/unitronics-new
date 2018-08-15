import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';
import { RecommenderExperiment } from './app-experiments/recommender-experiment';

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
    private authService: AuthService
  ) {
    // Initialize User
    let user = this.authService.getUser();
    console.log('User: ' + user);

    // Initialize the Experiment 
    this.experiment = new RecommenderExperiment({ userId: user });
    this.recommenderType = this.experiment.get('recommenderType');
    console.log('Recommender Type: ' + this.recommenderType);

    // Setup Google Analytics (depending on recommender Type!)
    switch (this.recommenderType) {
      case 'none':
        (<any>window).ga('create', 'UA-110379683-1', 'auto', { userId: user });
        break;
      case 'colabFilter':
        (<any>window).ga('create', 'UA-110379683-2', 'auto', { userId: user });
        break;
      case 'random':
        (<any>window).ga('create', 'UA-110379683-3', 'auto', { userId: user });
        break;
      case 'salesRank':
        (<any>window).ga('create', 'UA-110379683-4', 'auto', { userId: user });
        break;
    }
    (<any>window).ga('send', 'pageview');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });

  }

  ngOnInit(): void {

  }

}


