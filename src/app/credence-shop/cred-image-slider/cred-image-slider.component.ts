import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cred-image-slider',
  templateUrl: './cred-image-slider.component.html',
  styleUrls: ['./cred-image-slider.component.css']
})
export class CredImageSliderComponent implements OnInit {

  productList =
    [
      {
        Id: 1268
      },
      {
        Id: 1234
      },
      {
        Id: 1252
      }
    ]

 
  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 3000};
  basePath: string;

  constructor(
    private loggerService: LoggerService,
    private router: Router
  ) {
    this.basePath = environment.basePathCred;
   }

  ngOnInit() {
  }

  onItemClick(product: any) {
    this.loggerService.log('click', this.router.url, null, product.Id).subscribe((result: any) => {
      this.router.navigate(['/' + environment.basePathCred + '/detail/' + product.Id], { queryParams: { src: 'bb' } });
    });
  }

  next(){
    this.slickComponent.slickNext();
  }

  previous(){
    this.slickComponent.slickPrev();
  }

}
