import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { RecommenderExperiment } from './app-experiments/recommender-experiment';

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

  log(eventType: string, url: string, source?: string, productId?: number, surveyData?: any): Observable<any> {
    this.experiment = new RecommenderExperiment({ userId: this.authService.getUser() });

    let matchesParams = url.match('src=([^&]*)');
    let params = matchesParams != null ? matchesParams[1] : null;
    
    if(params != null){
      switch (params) {
        case 'r':
          source = 'recommender';
          break;
        case 'os':
          source = 'on sale';
          break;
        case 'bb':
          source = 'big banner';
          break;
        case 'c':
          source = 'cart';
          break;
        case 's':
          source = 'search';
          break;
      }
    }

    let logEvent = null;
    if (surveyData != null) {
      logEvent = {
        SessionId: this.authService.getUser(),
        Timestamp: Date.now(),
        Url: url,
        Event: eventType,
        Source: source,
        Treatment: this.experiment.get('recommenderType'),
        Shop: url.split('/')[1],
        ProductId: productId,
        Attractiveness: surveyData.attractiveness,
        Like: surveyData.like,
        Likelihood: surveyData.likelihood
      };
    } else {
      logEvent =  {
        SessionId: this.authService.getUser(),
        Timestamp: Date.now(),
        Url: url,
        Event: eventType,
        Source: source,
        Treatment: this.experiment.get('recommenderType'),
        Shop: url.split('/')[1],
        ProductId: productId,
        Attractiveness: null,
        Like: null,
        Likelihood: null
      };
    }
    console.log(logEvent);
    let post = this.http.post(
      this.baseUrl,
      logEvent,
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
