import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { CredDataService } from '../cred-data.service';
import { AuthService } from '../../auth.service';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cred-recommended-products',
  templateUrl: './cred-recommended-products.component.html',
  styleUrls: ['./cred-recommended-products.component.css']
})
export class CredRecommendedProductsComponent implements OnInit {

  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  userId: string;
  cartId: string;
  recommendations;
  loading: boolean = true;
  showRecommendations: boolean = true;
  numberOfRecommendations: number;
  basePath: string;
  isProduction: boolean;
  currentSlide: number = 0;

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false, "draggable": false };
  zone: any;
  $instance: any;


  constructor(
    private dataService: CredDataService,
    private authService: AuthService,
    private router: Router
  ) {
    this.basePath = environment.basePathCred;
    this.isProduction = environment.production;
    this.isProduction = environment.production;
  }

  ngOnInit() {
    let user = this.authService.getUser();
    let experiment = new RecommenderExperiment({ userId: user });
    this.numberOfRecommendations = experiment.get('recommenderType')[3];
    if(this.numberOfRecommendations != 0){
      this.slideConfig = { "slidesToShow": (this.numberOfRecommendations != 7 ? this.numberOfRecommendations : 4), "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false, "draggable": false };
      this.getColabFilterRecommendedProducts(user);
    } else {
      this.showRecommendations = false;
      this.loading = false;
    }
  }

  onItemClicked(product: any) {
    this.router.navigate(['/' + environment.basePathCred + '/detail/' + product.Id], { queryParams: { src: 'r' } });

  }

  getRandomRecommendedProducts() {
    this.dataService.getRecommendedProducts(null, 'random').subscribe(
      data => {
        this.recommendations = data;
        this.loading = false;
      });
  }

  getSalesRankRecommendedProducts() {
    this.dataService.getRecommendedProducts(null, 'salesRank').subscribe(
      data => {
        this.recommendations = data;
        this.loading = false;
      });
  }

  getColabFilterRecommendedProducts(userId: string) {
    this.dataService.getRecommendedProducts(userId, 'colabFilter').subscribe(
      data => {
        this.recommendations = data.slice(0, this.numberOfRecommendations);
        this.loading = false;
      });
  }

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }

  afterChange(e) {
    this.currentSlide = e.currentSlide;
  }

}
