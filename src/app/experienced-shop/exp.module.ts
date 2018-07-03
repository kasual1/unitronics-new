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
import { RatingModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ExpRoutingModule,
    RatingModule.forRoot(),
    SlickModule.forRoot(),
    BsDropdownModule.forRoot()
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
    ExpMainContentComponent
  ]
})
export class ExpModule { }
