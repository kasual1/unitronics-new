import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hed-search',
  templateUrl: './hed-search.component.html',
  styleUrls: ['./hed-search.component.css']
})
export class HedSearchComponent implements OnInit {

  suggestions: any = [];
  basePath: string;

  constructor(
    private route: Router,
  ) { 
    this.basePath = environment.basePathHed;
  }

  ngOnInit() {
  }

  search(searchTerm: string){
    this.route.navigate([ this.basePath + '/results'], { queryParams: { index: 1, size: 10, q: searchTerm } });
  }

}
