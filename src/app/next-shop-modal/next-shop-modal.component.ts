import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-next-shop-modal',
  templateUrl: './next-shop-modal.component.html',
  styleUrls: ['./next-shop-modal.component.css']
})
export class NextShopModalComponent implements OnInit {

  @Input() navigateTo: string = null;
  basePath: string;

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
    private authService: AuthService,
  ) {
    this.basePath = environment.basePathExp;
   }

  ngOnInit() {
  }

  onCloseClicked(){
    this.bsModalRef.hide();
  }

  onNextShopClicked() {
    switch (this.navigateTo) {
      case environment.basePathExp:
        this.router.navigateByUrl('/' + environment.basePathExp);
        this.authService.finishedHedShop();
        break;
      case environment.basePathUt:
        this.router.navigateByUrl('/' + environment.basePathUt);
        this.authService.finishedExpShop();
        break;
      case environment.basePathCred:
        this.router.navigateByUrl('/' + environment.basePathCred);
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

