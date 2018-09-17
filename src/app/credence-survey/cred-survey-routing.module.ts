import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredSurveyComponent } from './cred-survey/cred-survey.component';
import { CredSurveyAuthGuardService } from './cred-survey-auth-guard.service';
import { environment } from '../../environments/environment';

const routes: Routes = [
  {
    path: environment.basePathCredSurvey,
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
