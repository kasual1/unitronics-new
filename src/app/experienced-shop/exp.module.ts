import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpRoutingModule } from './exp-routing.module';
import { ExpSearchComponent } from './exp-search/exp-search.component';
import { ExpSearchResultComponent } from './exp-search-result/exp-search-result.component';
import { ExpLandingPageComponent } from './exp-landing-page/exp-landing-page.component';
import { ExpAddCartButtonComponent } from './exp-add-cart-button/exp-add-cart-button.component';
import { ExpCartComponent } from './exp-cart/exp-cart.component';
import { ExpDetailPageComponent } from './exp-detail-page/exp-detail-page.component';
import { SlickModule } from 'ngx-slick';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ExpImageSliderComponent } from './exp-image-slider/exp-image-slider.component';
import { ExpRegularProductsComponent } from './exp-regular-products/exp-regular-products.component';
import { ExpMainContentComponent } from './exp-main-content/exp-main-content.component';
import { RatingModule, ModalModule } from 'ngx-bootstrap';
import { ExpRecommendedProductsComponent } from './exp-recommended-products/exp-recommended-products.component';
import { ExpTestimonialsComponent } from './exp-testimonials/exp-testimonials.component';
import { ExpAdBannerComponent } from './exp-ad-banner/exp-ad-banner.component';
import { ExpProductSurveyComponent } from './exp-product-survey/exp-product-survey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NextShopModalComponent } from '../next-shop-modal/next-shop-modal.component';
import { CartLimitModalComponent } from '../cart-limit-modal/cart-limit-modal.component';
import { HelpModalComponent } from '../help-modal/help-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ExpRoutingModule,
    RatingModule.forRoot(),
    SlickModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    ModalModule,
    FormsModule
  ],
  declarations: [
    ExpLandingPageComponent,
    ExpSearchComponent,
    ExpSearchResultComponent,
    ExpAddCartButtonComponent,
    ExpCartComponent,
    ExpDetailPageComponent,
    ExpImageSliderComponent,
    ExpRegularProductsComponent,
    ExpMainContentComponent,
    ExpRecommendedProductsComponent,
    ExpTestimonialsComponent,
    ExpAdBannerComponent,
    ExpProductSurveyComponent
  ],
  bootstrap:[
    ExpProductSurveyComponent,
    NextShopModalComponent,
    CartLimitModalComponent,
    HelpModalComponent
  ]
})
export class ExpModule { }
