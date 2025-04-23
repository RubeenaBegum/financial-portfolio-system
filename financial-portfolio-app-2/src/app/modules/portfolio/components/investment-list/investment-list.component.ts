import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Investment } from '../../../models/investment.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import * as PortfolioActions from '../../../core/store/portfolio.actions';
import { selectInvestments, selectPortfolioLoading } from '../../../core/store/portfolio.selectors';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit {
  investments$: Observable<Investment[]>;
  loading$: Observable<boolean>;
  displayedColumns = ['name', 'assetType', 'quantity', 'purchasePrice', 'currentValue', 'actions'];

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(PortfolioActions.loadInvestments());
    this.investments$ = this.store.select(selectInvestments);
    this.loading$ = this.store.select(selectPortfolioLoading);
  }

  deleteInvestment(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete this investment?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(PortfolioActions.deleteInvestment({ id }));
      }
    });
  }
}