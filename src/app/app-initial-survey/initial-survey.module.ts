import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialSurveyComponent } from './initial-survey/initial-survey.component';
import { InitialSurveyRoutingModule } from './initial-survey-routing.module';
import { RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InitialSurveyRoutingModule,
    RatingModule.forRoot(),
    FormsModule
  ],
  declarations: [InitialSurveyComponent]
})
export class InitialSurveyModule { }
