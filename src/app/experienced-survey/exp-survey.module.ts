import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpSurveyComponent } from './exp-survey/exp-survey.component';
import { ExpSurveyRoutingModule } from './exp-survey-routing.module';
import { RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: 
  [
    CommonModule,
    ExpSurveyRoutingModule,
    RatingModule.forRoot(),
    FormsModule
  ],
  declarations: 
  [
    ExpSurveyComponent
  ]
})
export class ExpSurveyModule { }
