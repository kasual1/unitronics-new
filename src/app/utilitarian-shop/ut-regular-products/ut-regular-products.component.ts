import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { UtDataService } from '../ut-data.service';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ut-regular-products',
  templateUrl: './ut-regular-products.component.html',
  styleUrls: ['./ut-regular-products.component.css']
})
export class UtRegularProductsComponent implements OnInit {

  products;
  public loading: boolean = true;
  basePath: string;
  @Input() category: string;
  @Input() titleFirst: string;
  @Input() titleBold: string;

  @ViewChild(SlickComponent) slickComponent: SlickComponent;

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false };

  constructor
    (
    private dataService: UtDataService,
    private loggerService: LoggerService,
    private router: Router
    ) {
    this.basePath = environment.basePathUt;
  }

  ngOnInit() {
    this.getProducts(0, 15, this.category);
  }

  getProducts(pageIndex, pageSize, category) {
    this.dataService.readProducts(pageIndex * pageSize, pageSize, category)
      .subscribe(
        data => {
          this.products = data.products;
          console.log(this.products);
          this.loading = false;
        }
      );
  }

  onItemClicked(product: any) {
    this.router.navigate(['/' + environment.basePathHed + '/detail/' + product.Id], { queryParams: {src: 'os'}});

  }

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }
}
