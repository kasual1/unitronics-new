import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { environment } from '../../../environments/environment';


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
    private modalService: BsModalService
  ) {
    this.basePath = environment.basePathHed;
    this.isProduction = environment.production;
   }

  ngOnInit(){

  }

  onNextClicked() {
    const initialState = {
      navigateTo: environment.basePathExp
    }
    this.modalRef = this.modalService.show(NextShopModalComponent,{initialState});
  }

}

