import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalSurveyRoutingModule } from './final-survey-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalSurveyComponent } from './final-survey/final-survey.component';

@NgModule({
  imports: [
    CommonModule,
    FinalSurveyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FinalSurveyComponent]
})
export class FinalSurveyModule { }
