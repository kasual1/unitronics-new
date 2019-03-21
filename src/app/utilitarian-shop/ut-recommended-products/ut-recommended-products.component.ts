import { Component, OnInit, ViewChild } from '@angular/core';
import { UtDataService } from '../ut-data.service';
import { AuthService } from '../../auth.service';
import { SlickComponent } from 'ngx-slick';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';
import { environment } from '../../../environments/environment';
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
  recommendations;
  loading: boolean = true;
  showRecommendations: boolean = true;
  numberOfRecommendations: number;
  basePath: string;
  isProduction: boolean;
  currentSlide: number = 0;

  slideConfig = { "slidesToShow": (this.numberOfRecommendations != 7 ? this.numberOfRecommendations : 5), "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false, "draggable": false };
  zone: any;
  $instance: any;

  constructor(
    private dataService: UtDataService,
    private authService: AuthService,
    private router: Router
  ) {
    this.basePath = environment.basePathUt;
    this.isProduction = environment.production;
  }

  ngOnInit() {
    let user = this.authService.getUser();
    let experiment = new RecommenderExperiment({ userId: user });
    this.numberOfRecommendations = experiment.get('recommenderType')[0];
    if(this.numberOfRecommendations != 0){
      this.slideConfig = { "slidesToShow": (this.numberOfRecommendations != 7 ? this.numberOfRecommendations : 4), "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false, "draggable": false };
      this.getColabFilterRecommendedProducts(user);
    } else {
      this.showRecommendations = false;
      this.loading = false;
    }
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

  onItemClicked(product: any) {
    this.router.navigate(['/' + environment.basePathUt + '/detail/' + product.Id], { queryParams: { src: 'r' } });

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
