import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharedModule } from '../../shared/shared.module';
import { AllocationChartComponent } from './components/allocation-chart/allocation-chart.component';
import { PerformanceChartComponent } from './components/performance-chart/performance-chart.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardPageComponent,
    AllocationChartComponent,
    PerformanceChartComponent,
    SummaryCardsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class DashboardModule { }