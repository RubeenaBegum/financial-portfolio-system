import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PortfolioState, portfolioFeatureKey } from './portfolio.reducer';

export const selectPortfolioState = createFeatureSelector<PortfolioState>(portfolioFeatureKey);

export const selectInvestments = createSelector(
  selectPortfolioState,
  (state) => state.investments
);

export const selectPortfolioLoading = createSelector(
  selectPortfolioState,
  (state) => state.loading
);

export const selectPortfolioError = createSelector(
  selectPortfolioState,
  (state) => state.error
);

export const selectPortfolioSummary = createSelector(
  selectInvestments,
  (investments) => {
    const totalValue = investments.reduce((sum, inv) => sum + (inv.currentPrice || inv.purchasePrice) * inv.quantity, 0);
    const totalCost = investments.reduce((sum, inv) => sum + inv.purchasePrice * inv.quantity, 0);
    const profit = totalValue - totalCost;
    const profitPercentage = (profit / totalCost) * 100;

    return {
      totalValue,
      totalCost,
      profit,
      profitPercentage,
      count: investments.length
    };
  }
);