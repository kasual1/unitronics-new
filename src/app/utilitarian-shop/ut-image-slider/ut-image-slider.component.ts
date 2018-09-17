import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ut-image-slider',
  templateUrl: './ut-image-slider.component.html',
  styleUrls: ['./ut-image-slider.component.css']
})
export class UtImageSliderComponent implements OnInit {

  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 3000};
  basePath: string;
  constructor() {
    this.basePath = environment.basePathUt;
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
