import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { LoggerService } from '../../logger.service';
import { AuthService } from '../../auth.service';
import { RecommenderExperiment } from '../../app-experiments/recommender-experiment';


@Component({
  selector: 'app-hed-image-slider',
  templateUrl: './hed-image-slider.component.html',
  styleUrls: ['./hed-image-slider.component.css']
})
export class HedImageSliderComponent implements OnInit {

  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 3000 };
  basePath: string;
  productList =
    [
      {
        Id: 853
      },
      {
        Id: 816
      },
      {
        Id: 825
      }
    ]

  constructor(
    private router: Router,
    private loggerService: LoggerService,
    private authService: AuthService
  ) {
    this.basePath = environment.basePathHed;
  }

  ngOnInit() {
  }

  onItemClick(product: any) {
    this.router.navigate(['/' + environment.basePathHed + '/detail/' + product.Id], { queryParams: {src: 'bb'}});
  }

  next() {
    this.slickComponent.slickNext();
  }

  previous() {
    this.slickComponent.slickPrev();
  }
}
