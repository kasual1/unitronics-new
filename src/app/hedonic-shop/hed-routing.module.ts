import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HedLandingPageComponent } from './hed-landing-page/hed-landing-page.component';
import { HedDetailPageComponent } from './hed-detail-page/hed-detail-page.component';
import { HedSearchResultComponent } from './hed-search-result/hed-search-result.component';
import { HedAuthGuardService } from './hed-auth-guard.service';
import { HedMainContentComponent } from './hed-main-content/hed-main-content.component';
import { environment } from '../../environments/environment';

const routes: Routes = [
  {
    path: environment.basePathHed,
    component: HedLandingPageComponent,
    canActivate: [HedAuthGuardService],
    children:
      [
        {
          path: '',
          component: HedMainContentComponent
        },
        {
          path: 'detail/:id',
          component: HedDetailPageComponent,
          
        },
        {
          path: 'results',
          component: HedSearchResultComponent
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
export class HedRoutingModule { }
