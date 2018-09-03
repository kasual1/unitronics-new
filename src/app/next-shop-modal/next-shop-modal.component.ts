import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-next-shop-modal',
  templateUrl: './next-shop-modal.component.html',
  styleUrls: ['./next-shop-modal.component.css']
})
export class NextShopModalComponent implements OnInit {

  @Input() navigateTo: string = null;

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onCloseClicked(){
    this.bsModalRef.hide();
  }

  onNextShopClicked() {
    switch (this.navigateTo) {
      case 'experienced':
        this.router.navigateByUrl('/experienced');
        this.authService.finishedHedShop();
        break;
      case 'utilitarian':
        this.router.navigateByUrl('/utilitarian');
        this.authService.finishedExpShop();
        break;
      case 'credence':
        this.router.navigateByUrl('/credence');
        this.authService.finishedUtShop();
        break;
      case 'final-survey':
        this.router.navigateByUrl('/final-survey');
        this.authService.finishedCredShop();
        break;
    }
    this.bsModalRef.hide();
  }
}

