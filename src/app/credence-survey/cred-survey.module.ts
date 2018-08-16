import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredSurveyComponent } from './cred-survey/cred-survey.component';
import { CredSurveyRoutingModule } from './cred-survey-routing.module';
import { RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CredSurveyRoutingModule,
    RatingModule.forRoot(),
    FormsModule
  ],
  declarations: [CredSurveyComponent]
})
export class CredSurveyModule { }
