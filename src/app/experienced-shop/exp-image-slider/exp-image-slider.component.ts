import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';

@Component({
  selector: 'app-exp-image-slider',
  templateUrl: './exp-image-slider.component.html',
  styleUrls: ['./exp-image-slider.component.css']
})
export class ExpImageSliderComponent implements OnInit {

  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 3000};

  constructor() { }

  ngOnInit() {
  }

  next(){
    this.slickComponent.slickNext();
  }

  previous(){
    this.slickComponent.slickPrev();
  }
}
