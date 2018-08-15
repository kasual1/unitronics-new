import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hed-main-content',
  templateUrl: './hed-main-content.component.html',
  styleUrls: ['./hed-main-content.component.css']
})
export class HedMainContentComponent implements OnInit {

  cat1: string = 'Top Product';
  cat2: string = 'On Sale';

  constructor() { }

  ngOnInit() {
  }

}
