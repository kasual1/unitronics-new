import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';

@Component({
  selector: 'app-ut-ad-banner',
  templateUrl: './ut-ad-banner.component.html',
  styleUrls: ['./ut-ad-banner.component.css']
})
export class UtAdBannerComponent implements OnInit {

  basePath: string;
  showBanner: boolean = true;
  recommenderType: string;

  constructor(
    private authService: AuthService,
  ) {
    this.basePath = environment.basePathUt;
   }

  ngOnInit() {
    let user = this.authService.getUser();
    let experiment = new RecommenderExperiment({ userId: user });
    this.recommenderType = experiment.get('recommenderType')[0];
    if(this.recommenderType == 'none'){
      this.showBanner = false;
    }
  }

}
