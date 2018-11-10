import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-exp-landing-page',
  templateUrl: './exp-landing-page.component.html',
  styleUrls: ['./exp-landing-page.component.css']
})
export class ExpLandingPageComponent implements OnInit {

  modalRef: BsModalRef;
  basePath: string;
  isProduction: boolean;

  constructor(
    private modalService: BsModalService,
    private authService: AuthService
  ) {
    this.basePath = environment.basePathExp;
    this.isProduction = environment.production;
   }

  ngOnInit(){
    this.authService.shopArray.splice(this.authService.shopArray.indexOf(this.basePath), 1);
  }

  onNextClicked() {
    const initialState = {
      navigateTo: environment.basePathUt,
      basePath: this.basePath
    }
    this.modalRef = this.modalService.show(NextShopModalComponent,{initialState});
  }

}
