import { Component, OnInit, ViewChild } from '@angular/core';
import { UtDataService } from '../ut-data.service';
import { AuthService } from '../../auth.service';
import { SlickComponent } from 'ngx-slick';

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

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false };
  zone: any;
  $instance: any;


  constructor(
    private dataService: UtDataService,
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
