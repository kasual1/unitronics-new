import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-hed-image-slider',
  templateUrl: './hed-image-slider.component.html',
  styleUrls: ['./hed-image-slider.component.css']
})
export class HedImageSliderComponent implements OnInit {

  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 3000 };
  basePath: string;

  constructor() {
    this.basePath = environment.basePathHed;
  }

  ngOnInit() {
  }

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }
}
