import { createReducer, on } from '@ngrx/store';
import * as PortfolioActions from './portfolio.actions';
import { Investment } from '../../models/investment.model';

export interface PortfolioState {
  investments: Investment[];
  loading: boolean;
  error: string | null;
}

export const initialState: PortfolioState = {
  investments: [],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(PortfolioActions.loadInvestments, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(PortfolioActions.loadInvestmentsSuccess, (state, { investments }) => ({
    ...state,
    investments,
    loading: false
  })),
  on(PortfolioActions.loadInvestmentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(PortfolioActions.addInvestmentSuccess, (state, { investment }) => ({
    ...state,
    investments: [...state.investments, investment]
  }))
);

export const portfolioFeatureKey = 'portfolio';