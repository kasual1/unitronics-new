import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';

@Component({
  selector: 'app-cred-ad-banner',
  templateUrl: './cred-ad-banner.component.html',
  styleUrls: ['./cred-ad-banner.component.css']
})
export class CredAdBannerComponent implements OnInit {

  basePath: string;
  showBanner: boolean = true;
  recommenderType: string;

  constructor(
    private authService: AuthService
  ) { 
    this.basePath = environment.basePathCred;
  }

  ngOnInit() {
    let user = this.authService.getUser();
    let experiment = new RecommenderExperiment({ userId: user });
    this.recommenderType = experiment.get('recommenderType');
    if(this.recommenderType == 'none'){
      this.showBanner = false;
    }
  }

}
