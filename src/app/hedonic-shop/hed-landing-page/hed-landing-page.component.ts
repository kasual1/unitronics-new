import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hed-landing-page',
  templateUrl: './hed-landing-page.component.html',
  styleUrls: ['./hed-landing-page.component.css']
})
export class HedLandingPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNextClicked() {
      this.router.navigateByUrl('/experienced');
  }

}
