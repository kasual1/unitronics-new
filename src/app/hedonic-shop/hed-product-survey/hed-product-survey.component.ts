import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HedDataService } from '../hed-data.service';
import { CookieService } from 'ngx-cookie-service';
import { HedCartService } from '../hed-cart.service';
import { global } from '../../../variables/global';
import { AuthService } from '../../auth.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { LoggerService } from '../../logger.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hed-product-survey',
  templateUrl: './hed-product-survey.component.html',
  styleUrls: ['./hed-product-survey.component.css']
})
export class HedProductSurveyComponent implements OnInit {
  cartId: string;
  closeBtnName: string;
  @Input() product: any;
  surveyAlreadyTaken: boolean = true;
  productInCart: boolean = true;
  isLoading: boolean = true;
  modalRef: BsModalRef;
  basePath: string;

  userSurvey = new FormGroup(
    {
      likelihood: new FormControl(0, Validators.min(1)),
      attractive: new FormControl('', Validators.required),
      like: new FormControl('', Validators.required)
    }
  );

  constructor(
    private dataService: HedDataService,
    private cartService: HedCartService,
    private cookieService: CookieService,
    private authService: AuthService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private loggerService: LoggerService
  ) {
    this.basePath = environment.basePathHed;    
   }

  ngOnInit() {
    this.cartId = this.cartService.getCartId();
    let userId = this.authService.getUser();
    this.dataService.getCart(this.cartId).subscribe(
      (data: any) => {
        let cart = data;
        this.productInCart = this.cotainsItem(cart);
      }
    );

    this.dataService.getSurveyResults(userId, this.product.Id).subscribe(
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

    this.router.events.subscribe(event => {
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
      }
      this.userSurvey.reset({ likelihood: 0, attractive: '', like: '' });
      this.cartId = this.cartService.getCartId();
      this.dataService.getCart(this.cartId).subscribe(
        (data: any) => {
          let cart = data;
          this.productInCart = this.cotainsItem(cart);
        }
      );
    });

    this.cartService.onCartChanged.subscribe(
      () => {
        this.cartId = this.cartService.getCartId();
        this.dataService.getCart(this.cartId).subscribe(
          (data: any) => {
            let cart = data;
            this.productInCart = this.cotainsItem(cart);
          }
        );
      }
    );
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
    this.dataService.createSurveyResults(this.authService.getUser(), this.product.Id, answers).subscribe(
      (data: any) => {
        console.log('Survey answered! (added to cart)');
        this.surveyAlreadyTaken = true;
      }
    );
    this.cartId = this.cartService.getCartId();
    if (this.cartId != '') {
      console.log("Add to existing cart")
      this.addToCart(this.cartId, this.product);
    } else {
      console.log("Create new cart");
      this.createCart(this.product);
    }

    this.loggerService.log({
    }).subscribe(() => {
      // DO NOTHING
    });
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
  }

  onAddToCartOnly() {
    this.cartId = this.cartService.getCartId();
    if (this.cartId != '') {
      console.log("Add to existing cart")
      this.addToCart(this.cartId, this.product);
    } else {
      console.log("Create new cart");
      this.createCart(this.product);
    }
  }


  onNextShopClicked(){
    const initialState = {
      navigateTo: environment.basePathExp
    }
    this.modalRef = this.modalService.show(NextShopModalComponent,{initialState});
  }

  private createCart(product: any) {
    let userId = this.authService.getUser();
    if (userId != null) {
      this.dataService.createCart(product, 1, userId)
        .subscribe(
          data => {
            this.cookieService.set(global.HED_CART_ID, data.Id)
            this.cartService.updateCart(data);
          });
    }
  }

  private addToCart(cartId, product: any) {
    console.log(cartId);
    this.dataService.addToCart(cartId, product, 1)
      .subscribe(
        (data: any) => {
          this.cartService.updateCart(data);
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
