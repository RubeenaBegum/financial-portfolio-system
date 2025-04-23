import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PortfolioActions from './portfolio.actions';
import { PortfolioService } from '../services/portfolio.service';

@Injectable()
export class PortfolioEffects {
  loadInvestments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PortfolioActions.loadInvestments),
      mergeMap(() =>
        this.portfolioService.getInvestments().pipe(
          map(investments => PortfolioActions.loadInvestmentsSuccess({ investments })),
          catchError(error => of(PortfolioActions.loadInvestmentsFailure({ error: error.message })))
        )
      )
    )
  );

  addInvestment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PortfolioActions.addInvestment),
      mergeMap(({ investment }) =>
        this.portfolioService.addInvestment(investment).pipe(
          map(addedInvestment => PortfolioActions.addInvestmentSuccess({ investment: addedInvestment })),
          catchError(error => of(PortfolioActions.addInvestmentFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private portfolioService: PortfolioService
  ) {}
}