import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredLandingPageComponent } from './cred-landing-page/cred-landing-page.component';
import { CredRoutingModule } from './cred-routing.module';
import { RatingModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { SlickModule } from 'ngx-slick';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CredCartComponent } from './cred-cart/cred-cart.component';
import { CredSearchComponent } from './cred-search/cred-search.component';

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
  declarations: [CredLandingPageComponent, CredCartComponent, CredSearchComponent]
})
export class CredModule { }
