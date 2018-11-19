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
  @Input() basePath: string;

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onCloseClicked() {
    this.bsModalRef.hide();
  }

  onNextShopClicked() {
    this.router.navigateByUrl('/' + this.authService.getRandomShop());
    switch (this.basePath) {
      case environment.basePathHed:
        this.authService.finishedHedShop();
        break;
      case environment.basePathExp:
        this.authService.finishedExpShop();
        break;
      case environment.basePathUt:
        this.authService.finishedUtShop();
        break;
      case environment.basePathCred:
        this.authService.finishedCredShop();
        break;
    }
    this.bsModalRef.hide();
  }
}

