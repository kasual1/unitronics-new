import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ut-search',
  templateUrl: './ut-search.component.html',
  styleUrls: ['./ut-search.component.css']
})
export class UtSearchComponent implements OnInit {

  suggestions: any = [];
  basePath: string;

  constructor(
    private route: Router,
  ) {
    this.basePath = environment.basePathUt;
   }

  ngOnInit() {
  }

  search(searchTerm: string){
    this.route.navigate([this.basePath + '/results'], { queryParams: { index: 1, size: 10, q: searchTerm } });
  }

}
