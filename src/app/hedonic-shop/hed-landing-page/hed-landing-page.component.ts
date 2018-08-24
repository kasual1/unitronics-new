import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-hed-landing-page',
  templateUrl: './hed-landing-page.component.html',
  styleUrls: ['./hed-landing-page.component.css']
})
export class HedLandingPageComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onNextClicked(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onNextConfirmed(modalRef: BsModalRef){
    this.router.navigateByUrl('/experienced');
    this.authService.finishedHedShop();
    modalRef.hide();
  }


}
