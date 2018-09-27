import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ut-image-slider',
  templateUrl: './ut-image-slider.component.html',
  styleUrls: ['./ut-image-slider.component.css']
})
export class UtImageSliderComponent implements OnInit {

  productList =
    [
      {
        Id: 978
      },
      {
        Id: 998
      },
      {
        Id: 944
      }
    ]

  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 3000};
  basePath: string;
  constructor(
    private loggerService: LoggerService,
    private router: Router
  ) {
    this.basePath = environment.basePathUt;
   }

  ngOnInit() {
  }

  onItemClick(product: any) {
    this.router.navigate(['/' + environment.basePathHed + '/detail/' + product.Id], { queryParams: {src: 'bb'}});

  }

  next(){
    this.slickComponent.slickNext();
  }

  previous(){
    this.slickComponent.slickPrev();
  }
}
