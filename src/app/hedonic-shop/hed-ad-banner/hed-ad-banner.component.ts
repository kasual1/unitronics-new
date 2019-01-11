import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';


@Component({
  selector: 'app-hed-ad-banner',
  templateUrl: './hed-ad-banner.component.html',
  styleUrls: ['./hed-ad-banner.component.css']
})
export class HedAdBannerComponent implements OnInit {

  basePath: string;
  showBanner: boolean = true;
  recommenderType: string;

  constructor(
    private authService: AuthService
  ) {
    this.basePath = environment.basePathHed;
  }

  ngOnInit() {
    let user = this.authService.getUser();
    let experiment = new RecommenderExperiment({ userId: user });
    this.recommenderType = experiment.get('recommenderType')[1];
    if(this.recommenderType == 'none'){
      this.showBanner = false;
    }
  }

}
