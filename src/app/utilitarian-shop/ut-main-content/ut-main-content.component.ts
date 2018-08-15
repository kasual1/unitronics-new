import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ut-main-content',
  templateUrl: './ut-main-content.component.html',
  styleUrls: ['./ut-main-content.component.css']
})
export class UtMainContentComponent implements OnInit {

  cat1: string = 'Top Product';
  cat2: string = 'On Sale';

  constructor() { }

  ngOnInit() {
  }

}
