import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SlickComponent } from 'ngx-slick';
import { HedDataService } from '../hed-data.service';

@Component({
  selector: 'app-hed-regular-products',
  templateUrl: './hed-regular-products.component.html',
  styleUrls: ['./hed-regular-products.component.css']
})
export class HedRegularProductsComponent implements OnInit {

  products;
  public loading: boolean = true; 
  @Input() category: string;


  @ViewChild(SlickComponent) slickComponent: SlickComponent;
  
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1, "dots": false, "infinite": false, "autoplay": false};

    constructor(private dataService: HedDataService) { }
  
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
