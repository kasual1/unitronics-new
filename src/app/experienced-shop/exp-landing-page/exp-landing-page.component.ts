import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp-landing-page',
  templateUrl: './exp-landing-page.component.html',
  styleUrls: ['./exp-landing-page.component.css']
})
export class ExpLandingPageComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onNextClicked() {
    this.router.navigateByUrl('/utilitarian');
  }

}
