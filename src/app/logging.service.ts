import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private loggingUrl = environment.kibanaUrl = '/logging/event'

  constructor
    (
    private http: HttpClient
    ) { }

  logEvent(event: any): Observable<any> {
    return this.http.post(this.loggingUrl,
      event, {
        headers: {
          'Content-Type': 'application/json'
        }, responseType: 'json'
      });
  }
}
