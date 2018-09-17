import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtDataService } from '../ut-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ut-search-result',
  templateUrl: './ut-search-result.component.html',
  styleUrls: ['./ut-search-result.component.css']
})
export class UtSearchResultComponent implements OnInit {

  public searchTerm: string = null;
  public category: string;
  public order: string = null;
  public results: any[];
  public totalResults: number;
  public totalPages: number;
  public pageIndex: number = 1;
  public pageSize: number = 10;
  public pageIndices: number[] = [];
  basePath: string;

  filter = new FormGroup(
    {
      priceOrder: new FormControl(1)
    }
  );


  constructor(
    private dataService: UtDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.basePath = environment.basePathUt;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      this.category = params['c'];
      this.pageIndex = +params['index'];
      this.pageSize = +params['size'];
      if (this.category != null) {
        this.searchTerm = null;
      }
      this.searchProducts(this.pageIndex, this.pageSize, this.searchTerm, this.order, this.category);
    });

  }

  searchProducts(pageIndex, pageSize, searchTerm?, priceOrder?, category?) {
    this.results = [];
    this.dataService.searchProducts(pageIndex, pageSize, searchTerm, priceOrder, category)
      .subscribe((data: any) => {
        window.scrollTo(0, 0);
        console.log(data);
        this.results = data.products;
        this.totalResults = data.totalResults;
        this.totalPages = (this.totalResults % 10 > 0) 
        ? Math.floor(this.totalResults / this.pageSize) + 1
        : Math.floor(this.totalResults / this.pageSize);
        this.pageIndices = [];

        console.log(this.totalResults % 10);

        for (let i = 1; i <= this.totalPages; i++) {
          this.pageIndices.push(i);
        }
      }
      );
  }

  onNextPageClicked() {
    this.pageIndex++;
    let queryParams =
    {
      queryParams:
      {
        index: this.pageIndex,
        size: this.pageSize,
        q: this.searchTerm,
        c: this.category
      }
    }
    this.router.navigate(['/' + this.basePath + '/results'], queryParams);
  }

  onLastPageClicked() {
    if (this.pageIndex > 1) {
      this.pageIndex--;
      let queryParams =
      {
        queryParams:
        {
          index: this.pageIndex,
          size: this.pageSize,
          q: this.searchTerm,
          c: this.category
        }
      }
      this.router.navigate(['/' + this.basePath + '/results'], queryParams);
    }
  }

  onPageIndexClicked(index: number) {
    let queryParams =
    {
      queryParams:
      {
        index: index,
        size: this.pageSize,
        q: this.searchTerm,
        c: this.category
      }
    }
    this.router.navigate(['/' + this.basePath + '/results'], queryParams);
  }

  onSubmit() {
    this.pageIndex = 1;
    this.pageSize = 10;
    switch (this.filter.value['priceOrder']) {
      case 1:
        this.order = null;
        this.searchProducts(this.pageIndex, this.pageSize, this.searchTerm, this.order, this.category);
        break;
      case 2:
        this.order = 'asc';
        this.searchProducts(this.pageIndex, this.pageSize, this.searchTerm, this.order, this.category);
        break;
      case 3:
        this.order = 'desc';
        this.searchProducts(this.pageIndex, this.pageSize, this.searchTerm, this.order, this.category);
        break;
    }

    let queryParams =
    {
      queryParams:
      {
        index: this.pageIndex,
        size: this.pageSize,
        q: this.searchTerm,
        c: this.category
      }
    }

    this.router.navigate(['/' + this.basePath + '/results'], queryParams);
  }
}
