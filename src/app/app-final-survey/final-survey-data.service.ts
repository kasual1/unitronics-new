import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class FinalSurveyDataService {

  private userUrl = environment.apiUrl + "/user/final-survey";

  constructor(
    private http: HttpClient
  ) { }

  sendSurveyAnswers(userId: string, surveyAnswers: any){
    return this.http.post(this.userUrl,
      {
        userId: userId,
        surveyAnswers: surveyAnswers
      }, {
        headers: {
          'Content-Type': 'application/json'
        }, responseType: 'json'
      }
    );
  }

}
