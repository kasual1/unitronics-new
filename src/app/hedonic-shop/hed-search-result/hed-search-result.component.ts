import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HedDataService } from '../hed-data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hed-search-result',
  templateUrl: './hed-search-result.component.html',
  styleUrls: ['./hed-search-result.component.css']
})
export class HedSearchResultComponent implements OnInit {

  public searchTerm: string = null;
  public category: string;
  public order: string = null;
  public results: any[];
  public totalResults: number;
  public totalPages: number;
  public pageIndex: number = 1;
  public pageSize: number = 10;
  public pageIndices: number[] = [];
  public from: number;
  public to: number;

  filter = new FormGroup(
    {
      priceOrder: new FormControl(1)
    }
  );

  constructor(
    private dataService: HedDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
        this.results = data.products;
        this.totalResults = data.totalResults;
        this.totalPages = Math.floor(this.totalResults / this.pageSize) + 1;
        this.pageIndices = [];
        this.from = this.pageIndex + 1;
        this.to = (this.pageSize + this.pageIndex) - ((Math.floor((this.pageSize + this.pageIndex) / this.totalResults) * (this.pageSize + this.pageIndex) % this.totalResults));

        for (let i = 0; i < this.totalPages; i++) {
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
    this.router.navigate(['/hedonic/results'], queryParams);
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
      this.router.navigate(['/hedonic/results'], queryParams);
    }
  }

  onPageIndexClicked(index: number) {
    let queryParams =
      {
        queryParams:
        {
          index: index + 1,
          size: this.pageSize,
          q: this.searchTerm,
          c: this.category
        }
      }
      this.router.navigate(['/hedonic/results'], queryParams);
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

    this.router.navigate(['/hedonic/results'], queryParams);
  }
}
