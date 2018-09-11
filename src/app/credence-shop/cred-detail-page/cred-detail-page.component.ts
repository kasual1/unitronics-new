import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CredDataService } from '../cred-data.service';

@Component({
  selector: 'app-cred-detail-page',
  templateUrl: './cred-detail-page.component.html',
  styleUrls: ['./cred-detail-page.component.css']
})
export class CredDetailPageComponent implements OnInit {

  id: number;
  product: any;
  previewImageUrl: string;
  relatedProducts: any[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private dataService: CredDataService
  ) {
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
