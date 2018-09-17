import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-exp-ad-banner',
  templateUrl: './exp-ad-banner.component.html',
  styleUrls: ['./exp-ad-banner.component.css']
})
export class ExpAdBannerComponent implements OnInit {

  basePath: string;

  constructor() {
    this.basePath = environment.basePathExp;
   }

  ngOnInit() {
  }

}
