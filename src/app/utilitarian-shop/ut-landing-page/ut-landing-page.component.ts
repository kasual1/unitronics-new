import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-ut-landing-page',
  templateUrl: './ut-landing-page.component.html',
  styleUrls: ['./ut-landing-page.component.css']
})
export class UtLandingPageComponent implements OnInit {
  modalRef: BsModalRef;
  basePath: string;
  isProduction: boolean;

  constructor(
    private modalService: BsModalService,
    private authService: AuthService
  ) {
    this.basePath = environment.basePathUt;
    this.isProduction = environment.production;
  }

  ngOnInit() {
    if (this.authService.shopArray) {
      this.authService.shopArray.splice(this.authService.shopArray.indexOf(this.basePath), 1);
    }
  }

  onNextClicked() {
    const initialState = {
      navigateTo: environment.basePathCred,
      basePath: this.basePath
    }
    this.modalRef = this.modalService.show(NextShopModalComponent, { initialState });
  }
}
