import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredLandingPageComponent } from './cred-landing-page/cred-landing-page.component';
import { CredAuthGuardService } from './cred-auth-guard.service';

const routes: Routes = [
  {
    path: 'credence',
    component: CredLandingPageComponent,
    canActivate: [CredAuthGuardService],
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
export class CredRoutingModule { }
