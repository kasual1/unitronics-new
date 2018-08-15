import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { GoogleAnalyticsService } from '../../google-analytics.service';
import { ExpProductSurveyComponent } from '../exp-product-survey/exp-product-survey.component';

@Component({
  selector: 'app-exp-add-cart-button',
  templateUrl: './exp-add-cart-button.component.html',
  styleUrls: ['./exp-add-cart-button.component.css']
})
export class ExpAddCartButtonComponent implements OnInit {

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
    this.bsModalRef = this.modalService.show(ExpProductSurveyComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
