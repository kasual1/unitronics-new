import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NextShopModalComponent } from '../../next-shop-modal/next-shop-modal.component';

@Component({
  selector: 'app-ut-landing-page',
  templateUrl: './ut-landing-page.component.html',
  styleUrls: ['./ut-landing-page.component.css']
})
export class UtLandingPageComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(){

  }

  onNextClicked() {
    const initialState = {
      navigateTo: 'credence'
    }
    this.modalRef = this.modalService.show(NextShopModalComponent,{initialState});
  }
}
