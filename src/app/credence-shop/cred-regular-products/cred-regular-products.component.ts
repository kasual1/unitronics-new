import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { CredDataService } from '../cred-data.service';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cred-regular-products',
  templateUrl: './cred-regular-products.component.html',
  styleUrls: ['./cred-regular-products.component.css']
})
export class CredRegularProductsComponent implements OnInit {


  products;
  public loading: boolean = true;
  basePath: string;
  @Input() category: string;
  @Input() titleFirst: string;
  @Input() titleBold: string;

  @ViewChild(SlickComponent) slickComponent: SlickComponent;

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false };

  constructor(
    private dataService: CredDataService,
    private loggerService: LoggerService,
    private router: Router
  ) {
    this.basePath = environment.basePathCred;
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
    this.loggerService.log('click', this.router.url, null, product.Id).subscribe((result: any) => {
      this.router.navigate(['/' + environment.basePathCred + '/detail/' + product.Id], { queryParams: { src: 'os' } });
    });
  }

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }

}
