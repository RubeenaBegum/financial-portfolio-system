import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Investment } from '../../../../models/investment.model';
import { futureDateValidator } from '../../../../shared/validators/future-date.validator';

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.scss']
})
export class InvestmentFormComponent implements OnInit {
  @Input() investment: Investment | null = null;
  @Output() submitForm = new EventEmitter<Investment>();
  @Output() cancel = new EventEmitter<void>();

  assetTypes = ['Stock', 'Bond', 'ETF', 'Mutual Fund', 'Real Estate', 'Crypto'];
  investmentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.investmentForm = this.fb.group({
      assetType: [this.investment?.assetType || '', Validators.required],
      name: [this.investment?.name || '', [Validators.required, Validators.minLength(3)]],
      quantity: [
        this.investment?.quantity || '', 
        [Validators.required, Validators.min(0.01), Validators.pattern(/^\d+(\.\d{1,2})?$/)]
      ],
      purchasePrice: [
        this.investment?.purchasePrice || '', 
        [Validators.required, Validators.min(0.01), Validators.pattern(/^\d+(\.\d{1,2})?$/)]
      ],
      purchaseDate: [
        this.investment?.purchaseDate || '', 
        [Validators.required, futureDateValidator()]
      ],
      notes: [this.investment?.notes || '']
    });
  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      const formValue = this.investmentForm.value;
      const investment: Investment = {
        ...this.investment,
        ...formValue,
        purchaseDate: new Date(formValue.purchaseDate).toISOString()
      };
      this.submitForm.emit(investment);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}