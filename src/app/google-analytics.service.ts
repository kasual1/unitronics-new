import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  sendPageView(currentUrl: string) {
    (<any>window).ga('set', 'page', currentUrl);
    (<any>window).ga('send', {
      hitType: 'pageview',
      dimension3: this.authService.getUser(),
      dimension4: new Date().toString()
    });
  }

  sendAddToCartButtonUnconfirmedEvent(productId: number) {
    console.log(new Date().toString());
    (<any>window).ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Add to Cart (unconfirmed)',
      eventLabel: this.router.url,
      dimension3: this.authService.getUser(),
      metric1: productId,
      dimension4: new Date().toString()
    });
  }

  sendAddToCartButtonConfirmedEvent(productId: number) {
    let user = this.authService.getUser();
    let url = this.router.url;
    (<any>window).ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Add to Cart (confirmed)',
      eventLabel: this.router.url,
      dimension3: this.authService.getUser(),
      metric1: productId,
      dimension4: new Date().toString()

    });
  }

  sendRemoveFromCartEvent(productId: number) {
    let user = this.authService.getUser();
    let url = this.router.url;
    (<any>window).ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Remove from Cart',
      eventLabel: this.router.url,
      dimension3: this.authService.getUser(),
      metric1: productId,
      dimension4: new Date().toString()
    });
  }

  sendProductSurveyData(productId: number, likelihood: number, attractiveness: number, like: number) {
    (<any>window).ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Submit Survey',
      eventLabel: this.router.url,
      dimension3: this.authService.getUser(),
      metric1: productId,
      metric2: likelihood,
      metric3: attractiveness,
      metric4: like,
      dimension4: new Date().toString()
    });
  }

  sendInitialSurveyCompleted() {
    (<any>window).ga('send', {
      hitType: 'event',
      eventCategory: 'Button',
      eventAction: 'Submit Initial Survey',
      eventLabel: this.router.url,
      dimension3: this.authService.getUser(),
      dimension4: new Date().toString()
    });
  }



}
