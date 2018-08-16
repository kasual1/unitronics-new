import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cred-landing-page',
  templateUrl: './cred-landing-page.component.html',
  styleUrls: ['./cred-landing-page.component.css']
})
export class CredLandingPageComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNextClicked() {
      this.router.navigateByUrl('/final-survey');
  }
}
