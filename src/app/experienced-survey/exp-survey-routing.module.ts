import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpSurveyComponent } from './exp-survey/exp-survey.component';
import { ExpSurveyAuthGuardService } from './exp-survey-auth-guard.service';

const routes: Routes = [
  {
    path: 'exp-survey',
    component: ExpSurveyComponent,
    canActivate: [ExpSurveyAuthGuardService]
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
export class ExpSurveyRoutingModule { }
