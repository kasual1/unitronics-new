import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalSurveyComponent } from './final-survey/final-survey.component';
import { FinalSurveyAuthGuardService } from './final-survey-auth-guard.service';

const routes: Routes = [
  {
    path: 'final-survey',
    component: FinalSurveyComponent,
    canActivate: [FinalSurveyAuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FinalSurveyRoutingModule { }
