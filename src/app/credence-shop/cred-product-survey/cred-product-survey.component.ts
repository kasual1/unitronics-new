import { Component, OnInit, Input } from '@angular/core';
import { global } from '../../../variables/global';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { CredDataService } from '../cred-data.service';
import { CredCartService } from '../cred-cart.service';
import { CookieService } from 'ngx-cookie-service';
import { GoogleAnalyticsService } from '../../google-analytics.service';


@Component({
  selector: 'app-cred-product-survey',
  templateUrl: './cred-product-survey.component.html',
  styleUrls: ['./cred-product-survey.component.css']
})
export class CredProductSurveyComponent implements OnInit {

  cartId: string;
  closeBtnName: string;
  @Input() product: any;

  userSurvey = new FormGroup(
    {
      likelihood: new FormControl(0, Validators.min(1)),
      attractive: new FormControl('', Validators.required),
      like: new FormControl('', Validators.required)
    }
  )
 
  constructor(
    public bsModalRef: BsModalRef,
    private dataService: CredDataService,
    private cartService: CredCartService,
    private cookieService: CookieService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}
 
  ngOnInit() {
    console.log(this.product);
    this.cartId = this.cartService.getCartId();
  }

  onSubmit() {
    this.cartId = this.cartService.getCartId();
    if ( this.cartId != '') {
      console.log("Add to existing cart")
      this.addToCart(this.cartId, this.product);
    } else {
      console.log("Create new cart");
      this.createCart(this.product);
    }
    this.googleAnalyticsService.sendAddToCartButtonConfirmedEvent(this.product.Id);
    this.googleAnalyticsService.sendProductSurveyData(
      this.product.Id,
      this.userSurvey.value.likelihood,
      this.userSurvey.value.attractive,
      this.userSurvey.value.like,
    );
  }

  private createCart(product: any) {
    this.dataService.createCart(product, 1)
      .subscribe(
        data => {
          console.log(data);
          this.cookieService.set(global.CRED_CART_ID, data.Id)
          this.cartService.updateCart(data);
          this.bsModalRef.hide();
        });
  }

  private addToCart(cartId, product: any) {
    console.log(cartId);
    this.dataService.addToCart(cartId, product, 1)
      .subscribe(
        data => {
          this.cartService.updateCart(data);
          this.bsModalRef.hide();
        });
  }

}
