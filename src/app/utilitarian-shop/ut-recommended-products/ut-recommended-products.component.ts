import { Component, OnInit, ViewChild } from '@angular/core';
import { UtDataService } from '../ut-data.service';
import { AuthService } from '../../auth.service';
import { SlickComponent } from 'ngx-slick';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ut-recommended-products',
  templateUrl: './ut-recommended-products.component.html',
  styleUrls: ['./ut-recommended-products.component.css']
})
export class UtRecommendedProductsComponent implements OnInit {
  
  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  userId: string;
  cartId: string;
  recommendedProducts;
  loading: boolean = true;
  showRecommendations: boolean = true;
  recommenderType: string;
  basePath: string;
  isProduction: boolean;

  slideConfig = { "slidesToShow": 3, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false };
  zone: any;
  $instance: any;


  constructor(
    private dataService: UtDataService,
    private authService: AuthService,
    private loggerService: LoggerService,
    private router: Router
  ) {
    this.basePath = environment.basePathUt;
    this.isProduction = environment.production;
  }

  ngOnInit() {
    let user = this.authService.getUser();
    let experiment = new RecommenderExperiment({ userId: user });
    this.recommenderType = experiment.get('recommenderType');
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

  getRandomRecommendedProducts() {
    this.dataService.getRecommendedProducts(null, 'random').subscribe(
      data => {
        this.recommendedProducts = data;
        console.log(this.recommendedProducts);
        this.loading = false;
      });
  }

  getSalesRankRecommendedProducts() {
    this.dataService.getRecommendedProducts(null, 'salesRank').subscribe(
      data => {
        this.recommendedProducts = data;
        console.log(this.recommendedProducts);
        this.loading = false;
      });
  }

  getColabFilterRecommendedProducts(userId: string) {
    this.dataService.getRecommendedProducts(userId, 'colabFilter').subscribe(
      data => {
        this.recommendedProducts = data;
        console.log(this.recommendedProducts);
        this.loading = false;
      });
  }

  onItemClicked(product: any) {
    this.router.navigate(['/' + environment.basePathUt + '/detail/' + product.Id], { queryParams: {src: 'r'}});

  }

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }

}
