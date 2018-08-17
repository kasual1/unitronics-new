import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { GoogleAnalyticsService } from '../../google-analytics.service';
import { CredProductSurveyComponent } from '../cred-product-survey/cred-product-survey.component';

@Component({
  selector: 'app-cred-add-cart-button',
  templateUrl: './cred-add-cart-button.component.html',
  styleUrls: ['./cred-add-cart-button.component.css']
})
export class CredAddCartButtonComponent implements OnInit {

  
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
    this.bsModalRef = this.modalService.show(CredProductSurveyComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
