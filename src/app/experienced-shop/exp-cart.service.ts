import { Injectable, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { global } from '../../variables/global';


@Injectable({
  providedIn: 'root'
})
export class ExpCartService {
  cart: any;

  @Output() onCartChanged = new EventEmitter<any>();

  constructor(
    private cookieService: CookieService
  ) { }

  getCartId() {
    return this.cookieService.get(global.EXP_CART_ID);
  }

  updateCart(cart: any) {
    this.cart = cart;
    this.onCartChanged.emit(this.cart);
  }
}
