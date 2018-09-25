import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { HedDataService } from '../hed-data.service';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';

@Component({
  selector: 'app-hed-regular-products',
  templateUrl: './hed-regular-products.component.html',
  styleUrls: ['./hed-regular-products.component.css']
})
export class HedRegularProductsComponent implements OnInit {

  products;
  public loading: boolean = true;
  @Input() category: string;
  @Input() titleFirst: string;
  @Input() titleBold: string;

  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  basePath: string;

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false };

  constructor
    (
    private dataService: HedDataService,
    private loggerService: LoggerService,
    private authService: AuthService,
    private router: Router
    ) {
    this.basePath = environment.basePathHed;
  }

  ngOnInit() {
    this.getProducts(0, 15, this.category);
  }

  getProducts(pageIndex, pageSize, category) {
    this.dataService.readProducts(pageIndex, pageSize, category)
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
      this.router.navigate(['/' + environment.basePathHed + '/detail/' + product.Id], { queryParams: {src: 'os'}});
    });
  }

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }

}
