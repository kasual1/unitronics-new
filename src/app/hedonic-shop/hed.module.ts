import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedRoutingModule } from './hed-routing.module';
import { HedDetailPageComponent } from './hed-detail-page/hed-detail-page.component';
import { HedSearchComponent } from './hed-search/hed-search.component';
import { HedSearchResultComponent } from './hed-search-result/hed-search-result.component';
import { HedLandingPageComponent } from './hed-landing-page/hed-landing-page.component';
import { HedAddCartButtonComponent } from './hed-add-cart-button/hed-add-cart-button.component';
import { HedRecommendedProductsComponent } from './hed-recommended-products/hed-recommended-products.component';
import { HedImageSliderComponent } from './hed-image-slider/hed-image-slider.component';
import { SlickModule } from 'ngx-slick';
import { HedCartComponent } from './hed-cart/hed-cart.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HedRegularProductsComponent } from './hed-regular-products/hed-regular-products.component';
import { HedAdBannerComponent } from './hed-ad-banner/hed-ad-banner.component';
import { HedTestimonialsComponent } from './hed-testimonials/hed-testimonials.component';
import { HedMainContentComponent } from './hed-main-content/hed-main-content.component';
import { HedProductSurveyComponent } from './hed-product-survey/hed-product-survey.component';
import { RatingModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../next-shop-modal/next-shop-modal.component';

@NgModule({
  imports: [
    CommonModule,
    HedRoutingModule,
    ReactiveFormsModule,
    ModalModule,
    RatingModule.forRoot(),
    SlickModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    HedLandingPageComponent,
    HedDetailPageComponent,
    HedSearchComponent,
    HedSearchResultComponent,
    HedAddCartButtonComponent,
    HedRecommendedProductsComponent,
    HedImageSliderComponent,
    HedCartComponent,
    HedRegularProductsComponent,
    HedAdBannerComponent,
    HedTestimonialsComponent,
    HedMainContentComponent,
    HedProductSurveyComponent,
  ],
  bootstrap: [HedProductSurveyComponent, NextShopModalComponent]
})
export class HedModule { }
