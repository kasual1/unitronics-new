import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtRoutingModule } from './ut-routing.module';
import { UtSearchComponent } from './ut-search/ut-search.component';
import { UtSearchResultComponent } from './ut-search-result/ut-search-result.component';
import { UtLandingPageComponent } from './ut-landing-page/ut-landing-page.component';
import { UtAddCartButtonComponent } from './ut-add-cart-button/ut-add-cart-button.component';
import { UtCartComponent } from './ut-cart/ut-cart.component';
import { UtDetailPageComponent } from './ut-detail-page/ut-detail-page.component';
import { UtImageSliderComponent } from './ut-image-slider/ut-image-slider.component';
import { SlickModule } from 'ngx-slick';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UtRegularProductsComponent } from './ut-regular-products/ut-regular-products.component';
import { UtMainContentComponent } from './ut-main-content/ut-main-content.component';
import { RatingModule } from 'ngx-bootstrap';
import { UtAdBannerComponent } from './ut-ad-banner/ut-ad-banner.component';
import { UtRecommendedProductsComponent } from './ut-recommended-products/ut-recommended-products.component';
import { UtTestimonialsComponent } from './ut-testimonials/ut-testimonials.component';

@NgModule({
  imports: [
    CommonModule,
    UtRoutingModule,
    RatingModule.forRoot(),
    SlickModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    UtLandingPageComponent,
    UtSearchComponent,
    UtSearchResultComponent,
    UtAddCartButtonComponent,
    UtCartComponent,
    UtDetailPageComponent,
    UtImageSliderComponent,
    UtRegularProductsComponent,
    UtMainContentComponent,
    UtAdBannerComponent,
    UtRecommendedProductsComponent,
    UtTestimonialsComponent]
})
export class UtModule { }
