import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cred-main-content',
  templateUrl: './cred-main-content.component.html',
  styleUrls: ['./cred-main-content.component.css']
})
export class CredMainContentComponent implements OnInit {

  cat1: string = 'Top Product';
  cat2: string = 'On Sale';

  constructor() { }

  ngOnInit() {
  }

}
