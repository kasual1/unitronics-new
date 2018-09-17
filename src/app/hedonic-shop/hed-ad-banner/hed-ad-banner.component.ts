import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-hed-ad-banner',
  templateUrl: './hed-ad-banner.component.html',
  styleUrls: ['./hed-ad-banner.component.css']
})
export class HedAdBannerComponent implements OnInit {

  basePath: string;

  constructor() {
    this.basePath = environment.basePathHed;
  }

  ngOnInit() {
  }

}
