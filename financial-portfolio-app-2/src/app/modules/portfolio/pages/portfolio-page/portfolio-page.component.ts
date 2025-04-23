import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvestmentFormComponent } from '../../components/investment-form/investment-form.component';
import { Store } from '@ngrx/store';
import * as PortfolioActions from '../../../core/store/portfolio.actions';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  constructor(private dialog: MatDialog, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PortfolioActions.loadInvestments());
  }

  openAddInvestmentDialog(): void {
    const dialogRef = this.dialog.open(InvestmentFormComponent, {
      width: '600px',
      data: { investment: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(PortfolioActions.addInvestment({ investment: result }));
      }
    });
  }
}