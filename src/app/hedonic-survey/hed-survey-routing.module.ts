import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HedSurveyComponent } from './hed-survey/hed-survey.component';
import { HedSurveyAuthGuardService } from './hed-survey-auth-guard.service';

const routes: Routes = [
  {
    path: 'hed-survey',
    component: HedSurveyComponent,
    canActivate: [HedSurveyAuthGuardService]
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
export class HedSurveyRoutingModule { }
