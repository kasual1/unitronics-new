import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { ExpDataService } from '../exp-data.service';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp-regular-products',
  templateUrl: './exp-regular-products.component.html',
  styleUrls: ['./exp-regular-products.component.css']
})
export class ExpRegularProductsComponent implements OnInit {

  products;
  public loading: boolean = true;
  basePath: string;
  @Input() category: string;
  @Input() titleFirst: string;
  @Input() titleBold: string;

  @ViewChild(SlickComponent) slickComponent: SlickComponent;

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false };

  constructor(
    private dataService: ExpDataService,
    private loggerService: LoggerService,
    private router: Router
  ) {
    this.basePath = environment.basePathExp;
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
    this.router.navigate(['/' + environment.basePathExp + '/detail/' + product.Id], { queryParams: {src: 'os'}});

  }

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }

}
