import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cred-ad-banner',
  templateUrl: './cred-ad-banner.component.html',
  styleUrls: ['./cred-ad-banner.component.css']
})
export class CredAdBannerComponent implements OnInit {

  basePath: string;

  constructor() { 
    this.basePath = environment.basePathCred;
  }

  ngOnInit() {
  }

}
