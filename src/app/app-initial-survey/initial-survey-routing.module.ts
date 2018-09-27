import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialSurveyComponent } from './initial-survey/initial-survey.component';
import { InitialSurveyAuthGuardService } from './initial-survey-auth-guard.service';

const routes: Routes = [
  {
    path: 'init-survey',
    component: InitialSurveyComponent,
    canActivate: [InitialSurveyAuthGuardService],
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
export class InitialSurveyRoutingModule { }
