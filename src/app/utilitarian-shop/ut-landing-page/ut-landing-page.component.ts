import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ut-landing-page',
  templateUrl: './ut-landing-page.component.html',
  styleUrls: ['./ut-landing-page.component.css']
})
export class UtLandingPageComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onNextClicked() {
    this.router.navigateByUrl('/cred-survey');
  }


}
