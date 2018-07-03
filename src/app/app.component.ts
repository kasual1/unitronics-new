import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {
    router.events.subscribe((val) => {
      if (this.router.url.indexOf('/experienced') > -1) {
        this.renderer.setStyle(document.body, 'background-color', '#1c1c1c');
        this.renderer.setStyle(document.body, 'background', '#1c1c1c url(../../../assets/images/bg1.jpg) repeat')
      } else {
        this.renderer.setStyle(document.body, 'background-color', 'white');
        this.renderer.setStyle(document.body, 'background', 'none');
      }
    });
  }

  ngOnInit(): void {

  }

  
}


