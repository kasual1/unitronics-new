import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HedDataService } from '../hed-data.service';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HedCartService } from '../hed-cart.service';

@Component({
  selector: 'app-hed-detail-page',
  templateUrl: './hed-detail-page.component.html',
  styleUrls: ['./hed-detail-page.component.css']
})
export class HedDetailPageComponent implements OnInit {

  id: number;
  product: any;
  previewImageUrl: string;
  relatedProducts: any[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private dataService: HedDataService,
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
