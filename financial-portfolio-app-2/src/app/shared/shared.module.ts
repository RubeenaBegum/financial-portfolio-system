import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { PercentageChangePipe } from './pipes/percentage-change.pipe';
import { CurrencyInputDirective } from './directives/currency-input.directive';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CurrencyFormatPipe,
    PercentageChangePipe,
    CurrencyInputDirective,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    CurrencyFormatPipe,
    PercentageChangePipe,
    CurrencyInputDirective
  ]
})
export class SharedModule { }