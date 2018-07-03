import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SlickComponent } from 'ngx-slick';

@Component({
  selector: 'app-hed-testimonials',
  templateUrl: './hed-testimonials.component.html',
  styleUrls: ['./hed-testimonials.component.css']
})
export class HedTestimonialsComponent implements OnInit {

  products;
  public loading: boolean = true;
  @Input() category: string;
  @ViewChild(SlickComponent) slickComponent: SlickComponent;

  slideConfig = { "slidesToShow": 3, "slidesToScroll": 0, "dots": false, "infinite": true, "autoplay": true };

  constructor() { }

  ngOnInit(): void {
  }

}
