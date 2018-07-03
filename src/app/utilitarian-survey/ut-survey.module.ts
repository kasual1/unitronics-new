import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtSurveyRoutingModule } from './ut-survey-routing.module';
import { UtSurveyComponent } from './ut-survey/ut-survey.component';
import { RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: 
  [
    CommonModule,
    UtSurveyRoutingModule,
    RatingModule.forRoot(),
    FormsModule
  ],
  declarations: 
  [
    UtSurveyComponent
  ]
})
export class UtSurveyModule { }
