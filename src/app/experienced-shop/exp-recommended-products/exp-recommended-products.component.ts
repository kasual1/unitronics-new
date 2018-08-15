import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpDataService } from '../exp-data.service';
import { AuthService } from '../../auth.service';
import { SlickComponent } from 'ngx-slick';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';

@Component({
  selector: 'app-exp-recommended-products',
  templateUrl: './exp-recommended-products.component.html',
  styleUrls: ['./exp-recommended-products.component.css']
})
export class ExpRecommendedProductsComponent implements OnInit {


  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  userId: string;
  cartId: string;
  recommendedProducts;
  loading: boolean = true;
  showRecommendations: boolean = true;
  recommenderType: string;

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false };
  zone: any;
  $instance: any;


  constructor(
    private dataService: ExpDataService,
    private authService: AuthService
  ) {
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

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }

}
