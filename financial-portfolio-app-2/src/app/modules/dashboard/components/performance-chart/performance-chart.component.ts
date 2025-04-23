import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-performance-chart',
  template: `
    <div class="chart-container">
      <canvas baseChart
        [data]="chartData"
        [type]="'line'"
        [options]="chartOptions">
      </canvas>
    </div>
  `,
  styleUrls: ['./performance-chart.component.scss']
})
export class PerformanceChartComponent {
  @Input() set data(marketData: any[]) {
    if (marketData) {
      this.chartData = {
        labels: marketData.map(d => new Date(d.date).toLocaleDateString()),
        datasets: [{
          label: 'Portfolio Value',
          data: marketData.map(d => d.value),
          borderColor: '#3e95cd',
          fill: false
        }]
      };
    }
  }

  chartData: any;
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };
}