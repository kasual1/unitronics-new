import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cred-image-slider',
  templateUrl: './cred-image-slider.component.html',
  styleUrls: ['./cred-image-slider.component.css']
})
export class CredImageSliderComponent implements OnInit {

 
  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 3000};
  basePath: string;

  constructor() {
    this.basePath = environment.basePathCred;
   }

  ngOnInit() {
  }

  next(){
    this.slickComponent.slickNext();
  }

  previous(){
    this.slickComponent.slickPrev();
  }

}
