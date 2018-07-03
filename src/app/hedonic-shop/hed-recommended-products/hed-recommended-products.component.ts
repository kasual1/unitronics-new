import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { HedDataService } from '../hed-data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-hed-recommended-products',
  templateUrl: './hed-recommended-products.component.html',
  styleUrls: ['./hed-recommended-products.component.css']
})
export class HedRecommendedProductsComponent implements OnInit {

  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  userId: string;
  cartId: string;
  recommendedProducts;
  loading: boolean = true;

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 3000 };
  zone: any;
  $instance: any;


  constructor(
    private dataService: HedDataService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.userId = this.cookieService.get('uuid');
    this.dataService.getRecommendedProducts(this.userId).subscribe(
      data => {
        this.recommendedProducts = data;
        console.log(this.recommendedProducts);
        this.loading = false;
      });
  }

  next(){
    this.slickComponent.slickNext();
  }

  previous(){
    this.slickComponent.slickPrev();
  }


}
