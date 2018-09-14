import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private baseUrl = environment.apiUrl + "/log";

  constructor(private http: HttpClient) { }

  log(data: any): Observable<any> {

    return this.http.post(
      this.baseUrl,
      data,
      {
        headers: 
        {
          'Content-Type': 'application/json'
        }, 
        responseType: 'json'
      }
    );
  }


}
