import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-ut-landing-page',
  templateUrl: './ut-landing-page.component.html',
  styleUrls: ['./ut-landing-page.component.css']
})
export class UtLandingPageComponent implements OnInit {

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
    this.router.navigateByUrl('/credence');
    this.authService.finishedUtShop();
    modalRef.hide();
  }
}
