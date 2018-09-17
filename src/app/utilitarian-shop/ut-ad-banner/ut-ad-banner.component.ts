import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ut-ad-banner',
  templateUrl: './ut-ad-banner.component.html',
  styleUrls: ['./ut-ad-banner.component.css']
})
export class UtAdBannerComponent implements OnInit {

  basePath: string;

  constructor() {
    this.basePath = environment.basePathUt;
   }

  ngOnInit() {
  }

}
