import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-exp-search',
  templateUrl: './exp-search.component.html',
  styleUrls: ['./exp-search.component.css']
})
export class ExpSearchComponent implements OnInit {

  suggestions: any = [];
  basePath: string;

  constructor(
    private route: Router,
  ) { 
    this.basePath = environment.basePathExp;
  }

  ngOnInit() {
  }

  search(searchTerm: string){
    this.route.navigate(['/' + this.basePath + '/results'], { queryParams: { index: 1, size: 10, q: searchTerm } });
  }

}
