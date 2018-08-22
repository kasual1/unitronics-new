import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HedDataService } from '../hed-data.service';
import { CookieService } from 'ngx-cookie-service';
import { HedCartService } from '../hed-cart.service';
import { global } from '../../../variables/global';
import { GoogleAnalyticsService } from '../../google-analytics.service';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-hed-product-survey',
  templateUrl: './hed-product-survey.component.html',
  styleUrls: ['./hed-product-survey.component.css']
})
export class HedProductSurveyComponent implements OnInit {
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
    private dataService: HedDataService,
    private cartService: HedCartService,
    private cookieService: CookieService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.product);
    this.cartId = this.cartService.getCartId();
  }

  onSubmit() {
    this.cartId = this.cartService.getCartId();
    if (this.cartId != '') {
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
    let userId = this.authService.getUser();
    if (userId != null) {
      this.dataService.createCart(product, 1, userId)
        .subscribe(
          data => {
            console.log(data);
            this.cookieService.set(global.HED_CART_ID, data.Id)
            this.cartService.updateCart(data);
            this.bsModalRef.hide();
          });
    }
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
