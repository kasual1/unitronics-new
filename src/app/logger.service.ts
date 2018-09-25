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

  private experiment: RecommenderExperiment;

  constructor
    (
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  log(eventType: string, url: string, source?: string, productId?: number): Observable<any> {
    this.experiment = new RecommenderExperiment({ userId: this.authService.getUser() });
    let post = this.http.post(
      this.baseUrl,
      {
        SessionId: this.authService.getUser(),
        Timestamp: Date.now(),
        Url: url,
        Event: eventType,
        Source: source,
        Treatment: this.experiment.get('recommenderType'),
        Shop: url.split('/')[1],
        ProductId: productId
      },
      {
        headers:
        {
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      }
    );
    return post;
  }

}
