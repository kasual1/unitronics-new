import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtLandingPageComponent } from './ut-landing-page/ut-landing-page.component';
import { UtSearchResultComponent } from './ut-search-result/ut-search-result.component';
import { UtDetailPageComponent } from './ut-detail-page/ut-detail-page.component';
import { UtAuthGuardService } from './ut-auth-guard.service';
import { UtMainContentComponent } from './ut-main-content/ut-main-content.component';

const routes: Routes = [
  {
    path: 'utilitarian',
    component: UtLandingPageComponent,
    canActivate: [UtAuthGuardService],
    children:
      [
        {
          path: '',
          component: UtMainContentComponent
        },
        {
          path: 'results',
          component: UtSearchResultComponent
        },
        {
          path: 'detail/:id',
          component: UtDetailPageComponent
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
export class UtRoutingModule { }
