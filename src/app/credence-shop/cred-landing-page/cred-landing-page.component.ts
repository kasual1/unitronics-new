import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-cred-landing-page',
  templateUrl: './cred-landing-page.component.html',
  styleUrls: ['./cred-landing-page.component.css']
})
export class CredLandingPageComponent implements OnInit {
  
  
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
    this.router.navigateByUrl('/final-survey');
    this.authService.finishedCredShop();
    modalRef.hide();
  }
}
