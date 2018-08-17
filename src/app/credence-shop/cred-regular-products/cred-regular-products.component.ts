import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { CredDataService } from '../cred-data.service';

@Component({
  selector: 'app-cred-regular-products',
  templateUrl: './cred-regular-products.component.html',
  styleUrls: ['./cred-regular-products.component.css']
})
export class CredRegularProductsComponent implements OnInit {

 
  products;
  public loading: boolean = true; 
  @Input() category: string;
  @Input() titleFirst: string;
  @Input() titleBold: string;

  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false};

    constructor(private dataService: CredDataService) { }
  
    ngOnInit() {
      this.getProducts(0, 12, this.category);
    }
  
    getProducts(pageIndex, pageSize, category){
      this.dataService.readProducts(pageIndex*pageSize, pageSize, category)
      .subscribe(
      data => {
        this.products = data.products;
        console.log(this.products);
        this.loading = false;
      }
    );
    }

    next(){
      this.slickComponent.slickNext();
    }
  
    previous(){
      this.slickComponent.slickPrev();
    }

}
