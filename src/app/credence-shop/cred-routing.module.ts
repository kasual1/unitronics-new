import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredLandingPageComponent } from './cred-landing-page/cred-landing-page.component';
import { CredAuthGuardService } from './cred-auth-guard.service';
import { CredSearchResultComponent } from './cred-search-result/cred-search-result.component';
import { CredDetailPageComponent } from './cred-detail-page/cred-detail-page.component';
import { CredMainContentComponent } from './cred-main-content/cred-main-content.component';
import { environment } from '../../environments/environment';

const routes: Routes = [
  {
    path: environment.basePathCred,
    component: CredLandingPageComponent,
    canActivate: [CredAuthGuardService],
    children:
      [
        {
          path: '',
          component: CredMainContentComponent
        },
        {
          path: 'results',
          component: CredSearchResultComponent
        },
        {
          path: 'detail/:id',
          component: CredDetailPageComponent
        }
      ]
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
