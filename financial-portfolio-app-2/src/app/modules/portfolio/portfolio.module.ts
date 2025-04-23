import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromPortfolio from '../../core/store/portfolio.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PortfolioEffects } from '../../core/store/portfolio.effects';

@NgModule({
  declarations: [
    PortfolioPageComponent,
    InvestmentFormComponent,
    InvestmentListComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromPortfolio.portfolioFeatureKey, fromPortfolio.reducer),
    EffectsModule.forFeature([PortfolioEffects])
  ]
})
export class PortfolioModule { }