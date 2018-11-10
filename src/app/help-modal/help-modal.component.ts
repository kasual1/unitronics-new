import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.css']
})
export class HelpModalComponent implements OnInit {

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }

  onCloseClicked() {
    this.bsModalRef.hide();
  }

}
