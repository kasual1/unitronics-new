import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-cred-search',
  templateUrl: './cred-search.component.html',
  styleUrls: ['./cred-search.component.css']
})
export class CredSearchComponent implements OnInit {

  suggestions: any = [];
  basePath: string;

  constructor(
    private route: Router,
  ) {
    this.basePath = environment.basePathCred;
   }

  ngOnInit() {
  }

  search(searchTerm: string){
    this.route.navigate([this.basePath + '/results'], { queryParams: { index: 1, size: 10, q: searchTerm } });
  }

}
