import { Component } from '@angular/core';
import { YieldCalculatorService } from '../../core/data-access/yield-calculator.service';

@Component({
  selector: 'app-yield-calculator',
  standalone: true,
  imports: [],
  templateUrl: './yield-calculator.component.html',
  styleUrl: './yield-calculator.component.css'
})
export class YieldCalculatorComponent {

  purchasePrice?: number ;
  monthlyRent?: number;
  agencyFees: number[] = [0.30,0.25,0.20]; // 30% for the first year, 25% for the second year, 20% for the third year
  results: any;

  constructor(private yieldCalculatorService: YieldCalculatorService) { }

  calculate(){
    this.results = this.yieldCalculatorService.calculateYield(this.purchasePrice, this.monthlyRent, this.agencyFees);
  }
}
