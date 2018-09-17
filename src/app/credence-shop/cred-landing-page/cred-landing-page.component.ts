import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { environment } from '../../../environments/environment';

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
    private modalService: BsModalService
  ) {
    this.basePath = environment.basePathCred;
    this.isProduction = environment.production;
   }

  ngOnInit(){

  }

  onNextClicked() {
    const initialState = {
      navigateTo: 'final-survey'
    }
    this.modalRef = this.modalService.show(NextShopModalComponent,{initialState});
  }
}
