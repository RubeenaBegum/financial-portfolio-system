import { createAction, props } from '@ngrx/store';
import { Investment } from '../../models/investment.model';

export const loadInvestments = createAction('[Portfolio] Load Investments');
export const loadInvestmentsSuccess = createAction(
  '[Portfolio] Load Investments Success',
  props<{ investments: Investment[] }>()
);
export const loadInvestmentsFailure = createAction(
  '[Portfolio] Load Investments Failure',
  props<{ error: string }>()
);

export const addInvestment = createAction(
  '[Portfolio] Add Investment',
  props<{ investment: Investment }>()
);
export const addInvestmentSuccess = createAction(
  '[Portfolio] Add Investment Success',
  props<{ investment: Investment }>()
);
export const addInvestmentFailure = createAction(
  '[Portfolio] Add Investment Failure',
  props<{ error: string }>()
);