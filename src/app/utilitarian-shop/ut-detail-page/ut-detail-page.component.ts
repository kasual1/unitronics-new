import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtDataService } from '../ut-data.service';
import { CookieService } from 'ngx-cookie-service';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-ut-detail-page',
  templateUrl: './ut-detail-page.component.html',
  styleUrls: ['./ut-detail-page.component.css']
})
export class UtDetailPageComponent implements OnInit {

  id: number;
  product: any;
  previewImageUrl: string;
  modalRef: any;
  likelihood: number;

  constructor(
    private route: ActivatedRoute,
    private dataService: UtDataService,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.router.events.subscribe(val => {
      this.likelihood = 0;
      this.previewImageUrl = null;
      this.id = +this.route.snapshot.paramMap.get('id');
      this.getProduct();
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
        document.getElementsByTagName("router-outlet")[0].scrollIntoView();
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSliderChange(value: number) {
    console.log(value);
    this.likelihood = value;
  }
}
