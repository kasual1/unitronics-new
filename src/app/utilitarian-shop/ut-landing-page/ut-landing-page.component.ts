import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { environment } from '../../../environments/environment';

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
    private modalService: BsModalService
  ) { 
    this.basePath = environment.basePathUt;
    this.isProduction = environment.production;
  }

  ngOnInit(){

  }

  onNextClicked() {
    const initialState = {
      navigateTo: environment.basePathCred
    }
    this.modalRef = this.modalService.show(NextShopModalComponent,{initialState});
  }
}
