import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-hed-landing-page',
  templateUrl: './hed-landing-page.component.html',
  styleUrls: ['./hed-landing-page.component.css']
})
export class HedLandingPageComponent implements OnInit {

  modalRef: BsModalRef;
  basePath: string;
  isProduction: boolean;

  constructor(
    private modalService: BsModalService,
    private authService: AuthService
  ) {
    this.basePath = environment.basePathHed;
    this.isProduction = environment.production;
  }

  ngOnInit() {
    if (this.authService.shopArray) {
      this.authService.shopArray.splice(this.authService.shopArray.indexOf(this.basePath), 1);
    }
  }

  onNextClicked() {

    const initialState = {
      navigateTo: this.authService.getRandomShop(),
      basePath: this.basePath
    }
    this.modalRef = this.modalService.show(NextShopModalComponent, { initialState });
  }

}

