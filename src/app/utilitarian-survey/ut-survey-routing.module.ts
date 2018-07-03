import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtSurveyComponent } from './ut-survey/ut-survey.component';
import { UtSurveyAuthGuardService } from './ut-survey-auth-guard.service';

const routes: Routes = [
  {
    path: 'ut-survey',
    component: UtSurveyComponent,
    canActivate: [UtSurveyAuthGuardService]
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
export class UtSurveyRoutingModule { }
