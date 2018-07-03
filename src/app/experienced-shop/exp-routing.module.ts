import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpLandingPageComponent } from './exp-landing-page/exp-landing-page.component';
import { ExpSearchResultComponent } from './exp-search-result/exp-search-result.component';
import { ExpDetailPageComponent } from './exp-detail-page/exp-detail-page.component';
import { ExpAuthGuardService } from './exp-auth-guard.service';
import { ExpMainContentComponent } from './exp-main-content/exp-main-content.component';

const routes: Routes = [
  {
    path: 'experienced',
    component: ExpLandingPageComponent,
    canActivate: [ExpAuthGuardService],
    children:
      [
        {
          path: '',
          component: ExpMainContentComponent
        },
        {
          path: 'results',
          component: ExpSearchResultComponent
        },
        {
          path: 'detail/:id',
          component: ExpDetailPageComponent
        }
      ]
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExpRoutingModule { }
