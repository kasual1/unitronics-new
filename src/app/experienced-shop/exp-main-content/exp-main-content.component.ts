import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-main-content',
  templateUrl: './exp-main-content.component.html',
  styleUrls: ['./exp-main-content.component.css']
})
export class ExpMainContentComponent implements OnInit {

  cat1: string = 'Top Product';
  cat2: string = 'On Sale';

  constructor() { }

  ngOnInit() {
  }

}
