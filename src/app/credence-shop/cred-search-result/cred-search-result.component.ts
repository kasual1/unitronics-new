import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CredDataService } from '../cred-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cred-search-result',
  templateUrl: './cred-search-result.component.html',
  styleUrls: ['./cred-search-result.component.css']
})
export class CredSearchResultComponent implements OnInit {

  public searchTerm: string;
  public results: any[];
  public totalResults: number;
  public totalPages: number;
  public pageIndex: number = 0;
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
    private dataService: CredDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      this.pageIndex = +params['index'];
      this.pageSize = +params['size'];
      this.searchProducts(this.pageIndex, this.pageSize, this.searchTerm);
    });

  }

  searchProducts(pageIndex, pageSize, searchTerm, priceOrder?) {
    this.results = [];
    this.dataService.searchProducts(pageIndex, pageSize, searchTerm, priceOrder)
      .subscribe(data => {
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

  onSubmit() {
    switch (this.filter.value['priceOrder']) {
      case 1:
        this.searchProducts(0,10,this.searchTerm, null);
        break;
      case 2:
        this.searchProducts(0,10,this.searchTerm, 'asc');
        break;
      case 3:
        this.searchProducts(0,10,this.searchTerm, 'desc');
        break;
    }
  }

}
