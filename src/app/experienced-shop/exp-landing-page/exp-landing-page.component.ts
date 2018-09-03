import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';

@Component({
  selector: 'app-exp-landing-page',
  templateUrl: './exp-landing-page.component.html',
  styleUrls: ['./exp-landing-page.component.css']
})
export class ExpLandingPageComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(){

  }

  onNextClicked() {
    const initialState = {
      navigateTo: 'utilitarian'
    }
    this.modalRef = this.modalService.show(NextShopModalComponent,{initialState});
  }

}
