import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Investment } from '../../../models/investment.model';
import { MarketDataService } from '../../../core/services/market-data.service';
import { selectPortfolioSummary } from '../../../core/store/portfolio.selectors';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  summary$: Observable<any>;
  marketTrends$: Observable<any>;

  constructor(
    private store: Store,
    private marketDataService: MarketDataService
  ) {}

  ngOnInit(): void {
    this.summary$ = this.store.select(selectPortfolioSummary);
    this.marketTrends$ = this.marketDataService.getMarketTrends();
  }
}