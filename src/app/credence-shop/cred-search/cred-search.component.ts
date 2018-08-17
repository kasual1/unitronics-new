import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cred-search',
  templateUrl: './cred-search.component.html',
  styleUrls: ['./cred-search.component.css']
})
export class CredSearchComponent implements OnInit {

  suggestions: any = [];

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }

  search(searchTerm: string){
    this.route.navigate(['credence/results'], { queryParams: { index: 0, size: 10, q: searchTerm } });
  }

}
