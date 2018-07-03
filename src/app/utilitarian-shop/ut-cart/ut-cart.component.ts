import { Component, OnInit } from '@angular/core';
import { UtDataService } from '../ut-data.service';
import { UtCartService } from '../ut-cart.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-ut-cart',
  templateUrl: './ut-cart.component.html',
  styleUrls: ['./ut-cart.component.css']
})
export class UtCartComponent implements OnInit {

  public cart: any = null;
  totalAmount: string;
  parser: DOMParser;

  constructor(
    private databaseService: UtDataService,
    private cartService: UtCartService,
  ) { }

  ngOnInit(): void {
    let cartId = this.cartService.getCartId();
    if (cartId != '') {
      console.log("Found old cookie: " + cartId);
      this.getCart(cartId);
    }

    this.cartService.onCartChanged.subscribe(
      data => {
        let cartIcon = document.getElementById("cart-icon");
        cartIcon.classList.add('shake');
        setTimeout(() => { cartIcon.classList.remove('shake'); }, 1200);
        this.cart = data;
        this.totalAmount = "EUR " + this.calculateTotalAmount();
      });
  }

  getCart(cartId) {
    this.databaseService.getCart(cartId)
      .subscribe((data: any) => {
        console.log(data);
        this.cart = data;
        this.totalAmount = "EUR " + this.calculateTotalAmount();
      });
  }

  deleteFromCart(cartItem: any) {
    this.databaseService.deleteFromCart(this.cartService.getCartId(), cartItem)
      .subscribe(data => {
        console.log(data);
        this.cart = data;
        this.totalAmount = "EUR " + this.calculateTotalAmount();
      });
  }

  private calculateTotalAmount() {
    let totalAmount = 0;
    if (this.cart != null) {
      for (let item of this.cart.CartItems) {
        totalAmount += item.Product.LowestNewPriceRaw * item.Quantity;
      }
    }
    if (totalAmount == 0) {
      return '0,00';
    } else {
      let s = '' + totalAmount;
      return this.splitValue(s, s.length - 2);
    }
  }

  private splitValue(value, index) {
    return value.substring(0, index) + "," + value.substring(index);
  }

}
