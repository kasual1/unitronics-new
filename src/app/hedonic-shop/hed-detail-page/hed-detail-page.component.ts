import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HedDataService } from '../hed-data.service';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-hed-detail-page',
  templateUrl: './hed-detail-page.component.html',
  styleUrls: ['./hed-detail-page.component.css']
})
export class HedDetailPageComponent implements OnInit {

  id: number;
  src: string;
  product: any;
  previewImageUrl: string;
  relatedProducts: any[] = [];
  basePath: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: HedDataService,
    private router: Router,
    private loggerService: LoggerService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.basePath = environment.basePathHed;
        this.route.params.subscribe(params => {
          this.id = params['id'];
          this.getProduct();
        });
      }
    });
  }

  ngOnInit() {
  }

  getProduct() {
    this.product = null;
    this.dataService.readProduct(this.id)
      .subscribe(data => {
        this.product = data;
        this.previewImageUrl = data.images[0].LargeImageUrl;
        this.product.images = this.product.images.slice(0, 6);
      });
  }

  onImageClick(event: any, image: any) {
    this.previewImageUrl = image.LargeImageUrl;
  }

  showDescription() {
    document.getElementById("reviewsTab").classList.remove('active');
    document.getElementById("reviewsContent").classList.remove('active');
    document.getElementById("descriptionTab").classList.add('active');
    document.getElementById("descriptionContent").classList.add('active');
  }

}
