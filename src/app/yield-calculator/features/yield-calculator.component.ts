import { Component } from '@angular/core';
import { YieldCalculatorService } from '../../core/data-access/services/yield-calculator.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors
} from "@angular/forms";
import {YieldResultCardComponent} from "../ui/yield-result-card/yield-result-card.component";
import { MatButtonModule } from '@angular/material/button';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import { AGENCY_FEES_MOCK } from  '../../core/data-access/mocks/agency-fees.mock';

import { FormBuilder, Validators } from '@angular/forms';
import { nonNegativeValidator } from '../../validators/non-negative.validator';
import { nonZeroValidator } from "../../validators/non-zero.validator";

@Component({
  selector: 'app-yield-calculator',
  standalone: true,
  imports: [MatButtonModule, FormsModule, YieldResultCardComponent, CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './yield-calculator.component.html',
  styleUrl: './yield-calculator.component.css'
})
export class YieldCalculatorComponent {
  agencyFees: number[] = AGENCY_FEES_MOCK;
  results: any;
  form: FormGroup;

  constructor(private yieldCalculatorService: YieldCalculatorService, private fb: FormBuilder) {

    this.form = this.fb.group({
      purchasePrice: new FormControl('', [Validators.required, nonNegativeValidator(), nonZeroValidator()]),
      monthlyRent: new FormControl('', [Validators.required, nonNegativeValidator(), nonZeroValidator()])
    });
  }

  calculate() {
    if (this.form.valid) {
      this.results = this.yieldCalculatorService.calculateYield(this.form.value.purchasePrice, this.form.value.monthlyRent, this.agencyFees);
    }
  }
}
