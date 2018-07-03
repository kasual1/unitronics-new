import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpDataService } from '../exp-data.service';

@Component({
  selector: 'app-exp-search-result',
  templateUrl: './exp-search-result.component.html',
  styleUrls: ['./exp-search-result.component.css']
})
export class ExpSearchResultComponent implements OnInit {

  public searchTerm: string;
  public results: any[];
  public totalResults: number;
  public totalPages: number;
  public pageIndex: number = 0;
  public pageSize: number = 10;
  public pageIndices: number[] = [];
  public from: number;
  public to: number;

  constructor(
    private dataService: ExpDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      this.pageIndex = +params['index'];
      this.pageSize = +params['size'];
      this.searchProducts();
    });

  }

  searchProducts() {
    this.dataService.searchProducts(this.pageIndex, this.pageSize, this.searchTerm)
      .subscribe(data => {
        console.log(data);
        this.results = data.products;
        this.totalResults = data.totalResults;
        this.totalPages = Math.floor(this.totalResults / this.pageSize)+1;
        this.pageIndices = [];
        this.from = this.pageIndex + 1;
        this.to = (this.pageSize + this.pageIndex) - ((Math.floor((this.pageSize + this.pageIndex)/this.totalResults) * (this.pageSize + this.pageIndex)%this.totalResults));

        for (let i = 0; i < this.totalPages; i++) {
          this.pageIndices.push(i);
        }
      });
  }

}
