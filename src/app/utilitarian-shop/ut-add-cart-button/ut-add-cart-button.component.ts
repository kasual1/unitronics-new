import { Component, OnInit, Input } from '@angular/core';
import { UtDataService } from '../ut-data.service';
import { UtCartService } from '../ut-cart.service';
import { CookieService } from 'ngx-cookie-service';
import { global } from '../../../variables/global';


@Component({
  selector: 'app-ut-add-cart-button',
  templateUrl: './ut-add-cart-button.component.html',
  styleUrls: ['./ut-add-cart-button.component.css']
})
export class UtAddCartButtonComponent implements OnInit {

  
  cartId: string;
  latestProducts: any[];
  @Input() product: any;
  @Input() btnSize: string = 'btn btn-cart small';

  constructor(
    private dataService: UtDataService,
    private cartService: UtCartService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.cartId = this.cartService.getCartId();
  }

  private createCart(product: any) {
    this.dataService.createCart(product, 1)
      .subscribe(
        data => {
          console.log(data);
          this.cookieService.set(global.UT_CART_ID, data.Id)
          this.cartService.updateCart(data);
        });
  }

  private addToCart(cartId, product: any) {
    console.log(cartId);
    this.dataService.addToCart(cartId, product, 1)
      .subscribe(
        data => {
          this.cartService.updateCart(data);
        });
  }

  onAddToCartClicked() {
    this.cartId = this.cartService.getCartId();
    if ( this.cartId != '') {
      console.log("Add to existing cart")
      this.addToCart(this.cartId, this.product);
    } else {
      console.log("Create new cart");
      this.createCart(this.product);
    }
  }

}
