import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricsAuthGuardService } from './metrics-auth-guard.service';
import { MetricsComponent } from './metrics/metrics.component';

const routes: Routes = [
  {
    path: 'metrics',
    component: MetricsComponent
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
export class MetricsRoutingModule { }
