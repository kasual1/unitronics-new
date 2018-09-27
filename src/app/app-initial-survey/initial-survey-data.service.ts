import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InitialSurveyDataService {

  private urlGetProducts = environment.apiUrl + "/product/init";

  private urlPostRatings = environment.apiUrl + "/user/rating";


  constructor(private http: HttpClient) { }

  getRandomProducts(): Observable<any> {
    return this.http.get(this.urlGetProducts, { responseType: 'json' });
  }

  submitUserRatings(userId: string, ratedProducts: any): Observable<any> {
    let url = this.urlPostRatings;
    console.log({ 'userId': userId, 'ratings': ratedProducts });
    return this.http.post(url,
      { 'userId': userId, 'ratings': ratedProducts }, {
        headers: {
          'Content-Type': 'application/json'
        }, responseType: 'json'
      });
  }


}
