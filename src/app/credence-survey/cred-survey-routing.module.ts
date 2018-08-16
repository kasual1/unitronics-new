import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredSurveyComponent } from './cred-survey/cred-survey.component';
import { CredSurveyAuthGuardService } from './cred-survey-auth-guard.service';

const routes: Routes = [
  {
    path: 'cred-survey',
    component: CredSurveyComponent,
    canActivate: [CredSurveyAuthGuardService]
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
export class CredSurveyRoutingModule { }
