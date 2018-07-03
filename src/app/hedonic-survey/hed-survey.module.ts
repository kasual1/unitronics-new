import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedSurveyRoutingModule } from './hed-survey-routing.module';
import { HedSurveyComponent } from './hed-survey/hed-survey.component';
import { RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HedSurveyRoutingModule,
    RatingModule.forRoot(),
    FormsModule
  ],
  declarations: 
  [
    HedSurveyComponent
  ]
})
export class HedSurveyModule {

}
