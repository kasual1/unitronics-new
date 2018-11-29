import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsRoutingModule } from './metrics-routing.module';
import { MetricsComponent } from './metrics/metrics.component';

@NgModule({
  imports: [
    CommonModule,
    MetricsRoutingModule
  ],
  declarations: [MetricsComponent]
})
export class MetricsModule { }
