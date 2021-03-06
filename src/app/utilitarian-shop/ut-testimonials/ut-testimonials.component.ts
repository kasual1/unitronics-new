import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';

@Component({
  selector: 'app-ut-testimonials',
  templateUrl: './ut-testimonials.component.html',
  styleUrls: ['./ut-testimonials.component.css']
})
export class UtTestimonialsComponent implements OnInit {


  products;
  public loading: boolean = true;
  @Input() category: string;
  @ViewChild(SlickComponent) slickComponent: SlickComponent;

  slideConfig = { "slidesToShow": 3, "slidesToScroll": 0, "dots": false, "infinite": true, "autoplay": true };

  constructor() { }

  ngOnInit(): void {
  }


}
