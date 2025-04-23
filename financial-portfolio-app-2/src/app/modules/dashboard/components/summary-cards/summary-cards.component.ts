import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  template: `
    <div class="summary-grid">
      <div class="summary-card">
        <h3>Total Value</h3>
        <p>{{ summary.totalValue | currency }}</p>
      </div>
      <div class="summary-card">
        <h3>Total Cost</h3>
        <p>{{ summary.totalCost | currency }}</p>
      </div>
      <div class="summary-card" [class.positive]="summary.profit >= 0" [class.negative]="summary.profit < 0">
        <h3>Profit/Loss</h3>
        <p>{{ summary.profit | currency }} ({{ summary.profitPercentage | percentageChange }})</p>
      </div>
      <div class="summary-card">
        <h3>Investments</h3>
        <p>{{ summary.count }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./summary-cards.component.scss']
})
export class SummaryCardsComponent {
  @Input() summary: any;
}