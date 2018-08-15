import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HedProductSurveyComponent } from '../hed-product-survey/hed-product-survey.component';
import { GoogleAnalyticsService } from '../../google-analytics.service';


@Component({
  selector: 'app-hed-add-cart-button',
  templateUrl: './hed-add-cart-button.component.html',
  styleUrls: ['./hed-add-cart-button.component.css']
})
export class HedAddCartButtonComponent implements OnInit {

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
    this.bsModalRef = this.modalService.show(HedProductSurveyComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
