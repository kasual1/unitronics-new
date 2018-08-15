import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpDataService } from '../exp-data.service';

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
  
  constructor(
    private route: ActivatedRoute,
    private dataService: ExpDataService,
    private router: Router,
  ) {
    this.router.events.subscribe(val => {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.getProduct();
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
  }

  getProduct() {
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
