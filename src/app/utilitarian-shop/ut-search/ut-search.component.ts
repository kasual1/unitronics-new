import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ut-search',
  templateUrl: './ut-search.component.html',
  styleUrls: ['./ut-search.component.css']
})
export class UtSearchComponent implements OnInit {

  suggestions: any = [];

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }

  search(searchTerm: string){
    this.route.navigate(['utilitarian/results'], { queryParams: { index: 1, size: 10, q: searchTerm } });
  }

}
