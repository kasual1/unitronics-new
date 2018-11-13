import { Component, OnInit } from '@angular/core';
import { HedDataService } from '../hed-data.service';
import { HedCartService } from '../hed-cart.service';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';
import { Router } from '@angular/router';
import { LoggerService } from '../../logger.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { HelpModalComponent } from '../../help-modal/help-modal.component';


@Component({
  selector: 'app-hed-cart',
  templateUrl: './hed-cart.component.html',
  styleUrls: ['./hed-cart.component.css']
})
export class HedCartComponent implements OnInit {

  public cart: any = null;
  totalAmount: string;
  parser: DOMParser;
  basePath: string;
  modalRef: BsModalRef;

  constructor(
    private databaseService: HedDataService,
    private cartService: HedCartService,
    private authService: AuthService,
    private router: Router,
    private loggerService: LoggerService,
    private modalService: BsModalService
  ) {
    this.basePath = environment.basePathHed;
  }

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

  onItemClicked(product: any) {
    this.router.navigate(['/' + environment.basePathHed + '/detail/' + product.Id], { queryParams: {src: 'c'}});
  }

  getCart(cartId) {
    this.databaseService.getCart(cartId)
      .subscribe((data: any) => {
        this.cart = data;
        this.totalAmount = "EUR " + this.calculateTotalAmount();
      });
  }

  deleteFromCart(cartItem: any) {
    this.databaseService.deleteFromCart(this.cartService.getCartId(), cartItem)
      .subscribe(data => {
        this.cart = data;
        this.cartService.updateCart(data);
        this.totalAmount = "EUR " + this.calculateTotalAmount();
      });
    this.loggerService.log('remove from cart', this.router.url, null, cartItem.Product.Id).subscribe((result: any) => {
    });
  }

  onHelpClicked(){
    this.modalRef = this.modalService.show(HelpModalComponent);
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
