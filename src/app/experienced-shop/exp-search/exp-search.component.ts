import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp-search',
  templateUrl: './exp-search.component.html',
  styleUrls: ['./exp-search.component.css']
})
export class ExpSearchComponent implements OnInit {

  suggestions: any = [];

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }

  search(searchTerm: string){
    this.route.navigate(['/experienced/results'], { queryParams: { index: 1, size: 10, q: searchTerm } });
  }

}
