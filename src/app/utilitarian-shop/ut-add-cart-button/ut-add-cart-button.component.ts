import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { UtProductSurveyComponent } from '../ut-product-survey/ut-product-survey.component';
import { GoogleAnalyticsService } from '../../google-analytics.service';


@Component({
  selector: 'app-ut-add-cart-button',
  templateUrl: './ut-add-cart-button.component.html',
  styleUrls: ['./ut-add-cart-button.component.css']
})
export class UtAddCartButtonComponent implements OnInit {
  @Input() product: any;
  @Input() btnSize: string = 'btn btn-cart small';
  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) { }

  ngOnInit() {
  }

  onAddToCartClicked() {
    this.openModalWithComponent();
    this.googleAnalyticsService.sendAddToCartButtonUnconfirmedEvent(this.product.Id);
  }

  openModalWithComponent() {
    const initialState = {
      product: this.product
    };
    this.bsModalRef = this.modalService.show(UtProductSurveyComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
