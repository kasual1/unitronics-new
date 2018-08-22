import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hed-search',
  templateUrl: './hed-search.component.html',
  styleUrls: ['./hed-search.component.css']
})
export class HedSearchComponent implements OnInit {

  suggestions: any = [];

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }

  search(searchTerm: string){
    this.route.navigate(['hedonic/results'], { queryParams: { index: 1, size: 10, q: searchTerm } });
  }

}
