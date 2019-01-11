import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-cred-landing-page',
  templateUrl: './cred-landing-page.component.html',
  styleUrls: ['./cred-landing-page.component.css']
})
export class CredLandingPageComponent implements OnInit {

  modalRef: BsModalRef;
  basePath: string;
  isProduction: boolean;

  constructor(
    private modalService: BsModalService,
    private authService: AuthService
  ) {
    this.basePath = environment.basePathCred;
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
