import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpDataService } from '../exp-data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-exp-detail-page',
  templateUrl: './exp-detail-page.component.html',
  styleUrls: ['./exp-detail-page.component.css']
})
export class ExpDetailPageComponent implements OnInit {

  id: number;
  product: any;
  previewImageUrl: string;
  relatedProducts: any[] = [];
  basePath: string;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: ExpDataService
  ) {
    this.basePath = environment.basePathExp;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getProduct();
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
