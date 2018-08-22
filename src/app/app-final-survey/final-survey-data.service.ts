import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class FinalSurveyDataService {

  private userUrl = environment.apiUrl + "/user";

  constructor(
    private http: HttpClient
  ) { }

  updateUser(email: string, userId: string): Observable<any> {
    let user = { user: { uuid: userId, email: email} };
    console.log(user);
    console.log(this.userUrl);
    return this.http.put(this.userUrl,
      user, {
        headers: {
          'Content-Type': 'application/json'
        }, responseType: 'json'
      }
    );
  }

}
