import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { RecommenderExperiment } from './app-experiments/recommender-experiment';
import { Router, ActivatedRoute } from '@angular/router';
import { isNumber } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private baseUrl = environment.apiUrl + "/log";

  public source = null;

  public productId = null;

  private experiment: RecommenderExperiment;

  constructor
    (
    private http: HttpClient,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.experiment = new RecommenderExperiment({ userId: this.authService.getUser() });
    
  }

  log(eventType: string, url: string, productId?: number): Observable<any> {
    if(this.productId == null){
      this.productId = isNumber(+url.split('/')[3]) ? +url.split('/')[3] : null;
    }
    console.log('LOGGING DATA:', this.productId );
    let post = this.http.post(
      this.baseUrl,
      {
        SessionId: this.authService.getUser(),
        Timestamp: Date.now(),
        Url: url,
        Event: eventType,
        Source: this.source,
        Treatment: this.experiment.get('recommenderType'),
        Shop: 'hedonic',
        ProductId: this.productId
      },
      {
        headers:
        {
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      }
    );
    this.source = null;
    this.productId = null;
    return post;
  }

}
