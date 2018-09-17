import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-exp-landing-page',
  templateUrl: './exp-landing-page.component.html',
  styleUrls: ['./exp-landing-page.component.css']
})
export class ExpLandingPageComponent implements OnInit {

  modalRef: BsModalRef;
  basePath: string;

  constructor(
    private modalService: BsModalService
  ) {
    this.basePath = environment.basePathExp;
   }

  ngOnInit(){

  }

  onNextClicked() {
    const initialState = {
      navigateTo: 'utilitarian'
    }
    this.modalRef = this.modalService.show(NextShopModalComponent,{initialState});
  }

}
