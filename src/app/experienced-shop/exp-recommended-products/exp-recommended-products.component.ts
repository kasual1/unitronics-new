import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpDataService } from '../exp-data.service';
import { AuthService } from '../../auth.service';
import { SlickComponent } from 'ngx-slick';

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

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false };
  zone: any;
  $instance: any;


  constructor(
    private dataService: ExpDataService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    let userId = this.authService.getUser();
    if (userId != null) {
      this.dataService.getRecommendedProducts(userId).subscribe(
        data => {
          this.recommendedProducts = data;
          console.log(this.recommendedProducts);
          this.loading = false;
        });
    }
  }

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }


}
