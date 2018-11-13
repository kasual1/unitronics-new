import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-cart-limit-modal',
  templateUrl: './cart-limit-modal.component.html',
  styleUrls: ['./cart-limit-modal.component.css']
})
export class CartLimitModalComponent implements OnInit {


  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  onCloseClicked() {
    this.bsModalRef.hide();
  }

}
