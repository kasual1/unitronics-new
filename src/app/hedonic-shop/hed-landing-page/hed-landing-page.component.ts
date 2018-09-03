import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';


@Component({
  selector: 'app-hed-landing-page',
  templateUrl: './hed-landing-page.component.html',
  styleUrls: ['./hed-landing-page.component.css']
})
export class HedLandingPageComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(){

  }

  onNextClicked() {
    const initialState = {
      navigateTo: 'experienced'
    }
    this.modalRef = this.modalService.show(NextShopModalComponent,{initialState});
  }

}

