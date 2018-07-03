import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-main-content',
  templateUrl: './exp-main-content.component.html',
  styleUrls: ['./exp-main-content.component.css']
})
export class ExpMainContentComponent implements OnInit {

  cat1: string = 'Popular Product';


  constructor() { }

  ngOnInit() {
  }

}
