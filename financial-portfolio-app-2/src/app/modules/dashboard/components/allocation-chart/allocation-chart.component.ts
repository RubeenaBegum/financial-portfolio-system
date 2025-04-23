import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-allocation-chart',
  template: `
    <div class="chart-container">
      <canvas baseChart
        [data]="chartData"
        [type]="'doughnut'"
        [options]="chartOptions">
      </canvas>
    </div>
  `,
  styleUrls: ['./allocation-chart.component.scss']
})
export class AllocationChartComponent {
  @Input() chartData: any;
  
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right'
      }
    }
  };
}