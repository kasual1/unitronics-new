import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-exp-landing-page',
  templateUrl: './exp-landing-page.component.html',
  styleUrls: ['./exp-landing-page.component.css']
})
export class ExpLandingPageComponent implements OnInit {

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
    this.router.navigateByUrl('/utilitarian');
    this.authService.finishedExpShop();
    modalRef.hide();
  }

}
