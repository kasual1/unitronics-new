import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  basePath: string;

  constructor(private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigate(['/' + this.authService.getRandomShop()], {replaceUrl: true});
  }

}
