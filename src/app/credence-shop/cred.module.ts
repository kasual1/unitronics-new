import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredLandingPageComponent } from './cred-landing-page/cred-landing-page.component';
import { CredRoutingModule } from './cred-routing.module';
import { RatingModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { SlickModule } from 'ngx-slick';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CredCartComponent } from './cred-cart/cred-cart.component';
import { CredSearchComponent } from './cred-search/cred-search.component';
import { CredSearchResultComponent } from './cred-search-result/cred-search-result.component';
import { CredAddCartButtonComponent } from './cred-add-cart-button/cred-add-cart-button.component';
import { CredDetailPageComponent } from './cred-detail-page/cred-detail-page.component';
import { CredMainContentComponent } from './cred-main-content/cred-main-content.component';
import { CredRecommendedProductsComponent } from './cred-recommended-products/cred-recommended-products.component';
import { CredRegularProductsComponent } from './cred-regular-products/cred-regular-products.component';
import { CredImageSliderComponent } from './cred-image-slider/cred-image-slider.component';
import { CredTestimonialsComponent } from './cred-testimonials/cred-testimonials.component';
import { CredAdBannerComponent } from './cred-ad-banner/cred-ad-banner.component';
import { CredProductSurveyComponent } from './cred-product-survey/cred-product-survey.component';
import { NextShopModalComponent } from '../next-shop-modal/next-shop-modal.component';

@NgModule({
  imports: [
    CommonModule,
    CredRoutingModule,
    RatingModule.forRoot(),
    SlickModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CredLandingPageComponent,
    CredCartComponent,
    CredSearchComponent,
    CredSearchResultComponent,
    CredAddCartButtonComponent,
    CredDetailPageComponent,
    CredMainContentComponent,
    CredRecommendedProductsComponent,
    CredRegularProductsComponent,
    CredImageSliderComponent,
    CredTestimonialsComponent,
    CredAdBannerComponent,
    CredProductSurveyComponent,
  ],
  bootstrap:[CredProductSurveyComponent, NextShopModalComponent]
})
export class CredModule { }
