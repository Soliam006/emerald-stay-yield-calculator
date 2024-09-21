import { Component } from '@angular/core';
import { YieldCalculatorService } from '../../core/data-access/services/yield-calculator.service';
import {FormsModule} from "@angular/forms";
import {YieldResultCardComponent} from "../ui/yield-result-card/yield-result-card.component";
import { MatButtonModule } from '@angular/material/button';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import { AGENCY_FEES_MOCK } from  '../../core/data-access/mocks/agency-fees.mock';

@Component({
  selector: 'app-yield-calculator',
  standalone: true,
  imports: [MatButtonModule,  FormsModule, YieldResultCardComponent, CommonModule, MatIconModule],
  templateUrl: './yield-calculator.component.html',
  styleUrl: './yield-calculator.component.css'
})
export class YieldCalculatorComponent {
  purchasePrice!: number ;
  monthlyRent!: number;
  agencyFees: number[] = AGENCY_FEES_MOCK;
  results: any;

  constructor(private yieldCalculatorService: YieldCalculatorService) { }

  calculate(){
    this.results = this.yieldCalculatorService.calculateYield(this.purchasePrice, this.monthlyRent, this.agencyFees);
  }
}
