import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { IntroductionAuthGuardService } from './introduction-auth-guard.service';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
    canActivate: [IntroductionAuthGuardService],
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
export class IntroductionRoutingModule { }
