import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalSurveyRoutingModule } from './final-survey-routing.module';
import { FormsModule } from '@angular/forms';
import { FinalSurveyComponent } from './final-survey/final-survey.component';

@NgModule({
  imports: [
    CommonModule,
    FinalSurveyRoutingModule,
    FormsModule
  ],
  declarations: [FinalSurveyComponent]
})
export class FinalSurveyModule { }
