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
  recommenderType: string;
  basePath: string;
  isProduction: boolean;
  currentSlide: number = 0;

  slideConfig = { "slidesToShow": 5, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false, "draggable": false };
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
    this.recommenderType = experiment.get('recommenderType')[3];
    switch (this.recommenderType) {
      case 'none':
        this.showRecommendations = false;
        break;
      case 'random':
        this.getRandomRecommendedProducts();
        break;
      case 'salesRank':
        this.getSalesRankRecommendedProducts();
        break;
      case 'colabFilter':
        this.getColabFilterRecommendedProducts(user);
        break;
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
        this.recommendations = data;
        this.loading = false;
      });
  }

  next() {
    this.slickComponent.slickNext();
    console.log(SlickComponent);
  }

  previous() {
    this.slickComponent.slickPrev();
    console.log(SlickComponent);
  }

  afterChange(e) {
    this.currentSlide = e.currentSlide;
    console.log(this.currentSlide);
  }

}
