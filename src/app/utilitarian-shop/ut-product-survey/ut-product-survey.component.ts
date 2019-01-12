import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { UtDataService } from '../ut-data.service';
import { UtCartService } from '../ut-cart.service';
import { CookieService } from 'ngx-cookie-service';
import { global } from '../../../variables/global';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';
import { CartLimitModalComponent } from '../../cart-limit-modal/cart-limit-modal.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ut-product-survey',
  templateUrl: './ut-product-survey.component.html',
  styleUrls: ['./ut-product-survey.component.css']
})
export class UtProductSurveyComponent implements OnInit, OnDestroy {
  cartId: string;
  closeBtnName: string;
  @Input() product: any;
  surveyAlreadyTaken: boolean = true;
  productInCart: boolean = true;
  isLoading: boolean = true;
  modalRef: BsModalRef;
  basePath: string;
  source: string = null;

  cartSubscription: Subscription;
  cartChangeSubscription: Subscription;
  surveySubscription: Subscription;
  routerSubscription: Subscription;


  userSurvey = new FormGroup(
    {
      likelihood: new FormControl(0, Validators.min(1)),
      attractive: new FormControl('', Validators.required),
      like: new FormControl('', Validators.required)
    }
  );

  constructor(
    private dataService: UtDataService,
    private cartService: UtCartService,
    private cookieService: CookieService,
    private authService: AuthService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private loggerService: LoggerService
  ) {
    this.basePath = environment.basePathUt;

    this.route.queryParams.subscribe((params: any) => {
      this.source = params['src'];
    });
  }

  ngOnInit() {
    this.cartId = this.cartService.getCartId();
    let userId = this.authService.getUser();
    this.cartSubscription = this.dataService.getCart(this.cartId).subscribe(
      (data: any) => {
        let cart = data;
        this.productInCart = this.cotainsItem(cart);
      }
    );

    this.surveySubscription = this.dataService.getSurveyResults(userId, this.product.Id).subscribe(
      (data: any) => {
        console.log('survey Found!');
        this.surveyAlreadyTaken = true;
        this.isLoading = false;
      },
      (error: any) => {
        if (error.status === 404) {
          console.log('survey NOT Found!');
          this.surveyAlreadyTaken = false;
          this.isLoading = false;
        }
      }
    );

    this.routerSubscription = this.router.events.subscribe(event => {
      this.isLoading = true;
      let user = this.authService.getUser();
      if (event instanceof NavigationEnd) {
        console.log('ROUTE CHANGED');
        this.dataService.getSurveyResults(userId, this.route.snapshot.params.id).subscribe(
          (data: any) => {
            console.log('survey Found!');
            this.surveyAlreadyTaken = true;
            this.isLoading = false;
          },
          (error: any) => {
            if (error.status === 404) {
              console.log('survey NOT Found!');
              this.surveyAlreadyTaken = false;
              this.isLoading = false;

            }
          });
        this.userSurvey.reset({ likelihood: 0, attractive: '', like: '' });
        this.cartId = this.cartService.getCartId();
        this.cartSubscription = this.dataService.getCart(this.cartId).subscribe(
          (data: any) => {
            let cart = data;
            this.productInCart = this.cotainsItem(cart);
          }
        );
      }
    });

    this.cartChangeSubscription = this.cartService.onCartChanged.subscribe(
      () => {
        this.cartId = this.cartService.getCartId();
        this.cartSubscription = this.dataService.getCart(this.cartId).subscribe(
          (data: any) => {
            let cart = data;
            this.productInCart = this.cotainsItem(cart);
          }
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.cartChangeSubscription.unsubscribe();
    this.surveySubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  onSubmitAddToCart() {
    this.surveyAlreadyTaken = true;
    this.productInCart = true;
    let answers =
    {
      likelihood: this.userSurvey.value.likelihood,
      attractiveness: this.userSurvey.value.attractive,
      like: this.userSurvey.value.like,
      addedToCart: true
    }
    console.log(answers);
    this.dataService.createSurveyResults(this.authService.getUser(), this.product.Id, answers).subscribe(
      (data: any) => {
        console.log('Survey answered! (added to cart)');
        this.surveyAlreadyTaken = true;
      }
    );
    this.cartId = this.cartService.getCartId();
    if (this.cartId != '') {
      console.log("Add to existing cart")
      this.addToCart(this.cartId, this.product, () => {
        this.loggerService.log('submit + add to cart', this.router.url, this.source, this.product.Id, answers).subscribe((result: any) => {
        });
      });
    } else {
      console.log("Create new cart");
      this.createCart(this.product, () => {
        this.loggerService.log('submit + add to cart', this.router.url, this.source, this.product.Id, answers).subscribe((result: any) => {
        });
      });
    }
  }

  onSubmitOnly() {
    let answers =
    {
      likelihood: this.userSurvey.value.likelihood,
      attractiveness: this.userSurvey.value.attractive,
      like: this.userSurvey.value.like,
      addedToCart: false
    }
    this.dataService.createSurveyResults(this.authService.getUser(), this.product.Id, answers).subscribe(
      (data: any) => {
        console.log('Survey answered! (added to cart)');
        this.surveyAlreadyTaken = true;
      }
    );
    this.loggerService.log('submit', this.router.url, this.source, this.product.Id, answers).subscribe((result: any) => {
    });
  }

  onAddToCartOnly() {
    this.cartId = this.cartService.getCartId();
    if (this.cartId != '') {
      console.log("Add to existing cart")
      this.addToCart(this.cartId, this.product, () => {
        this.loggerService.log('add to cart', this.router.url, this.source, this.product.Id).subscribe((result: any) => {
        });
      });
    } else {
      console.log("Create new cart");
      this.createCart(this.product, () => {
        this.loggerService.log('add to cart', this.router.url, this.source, this.product.Id).subscribe((result: any) => {
        });
      });
    }
  }


  onNextShopClicked() {
    const initialState = {
      navigateTo: environment.basePathCred
    }
    this.modalRef = this.modalService.show(NextShopModalComponent, { initialState });
  }

  private calculateCartValue(cart: any) {
    let totalAmount = 0;
    if (cart != null) {
      for (let item of cart.CartItems) {
        totalAmount += item.Product.LowestNewPriceRaw * item.Quantity;
      }
    }
    return totalAmount;
  }


  private createCart(product: any, callback) {
    if (product.LowestNewPriceRaw < 10000) {
      let userId = this.authService.getUser();
      if (userId != null) {
        this.dataService.createCart(product, 1, userId)
          .subscribe(
            data => {
              this.cookieService.set(global.UT_CART_ID, data.Id)
              this.cartService.updateCart(data);
              callback();
            });
      }
    } else {
      this.productInCart = false;
      console.log('Your cart exceeds the budget limitation!');
      this.modalRef = this.modalService.show(CartLimitModalComponent);
    }
  }

  private addToCart(cartId, product: any, callback) {
    // Check if budget limit will be exceeded
    this.dataService.getCart(cartId).subscribe((data: any) => {
      console.log('ADDED TO CART CHECK: ', data, product);
      if ((this.calculateCartValue(data) + product.LowestNewPriceRaw) < 10000) {
        console.log("Add to existing cart")
        // Add to existing cart
        this.dataService.addToCart(cartId, product, 1)
          .subscribe(
            (data: any) => {
              this.cartService.updateCart(data);
              callback();
            },
            (error: any) => {
              switch (error.status) {
                case 409:
                  console.log('409 Item already exists');
                  break;
                case 500:
                  console.log('500 Server error');
                  break;
              }
            });
      } else {
        this.productInCart = false;
        console.log('Your cart exceeds the budget limitation!');
        this.modalRef = this.modalService.show(CartLimitModalComponent);
      }
    });
  }

  private cotainsItem(cart: any) {
    let found = false;
    let cartItems = cart != null ? cart.CartItems : [];
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].ProductId == this.product.Id) {
        found = true;
        break;
      }
    }
    return found;
  }


}
