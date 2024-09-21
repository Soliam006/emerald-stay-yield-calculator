import { Component } from '@angular/core';
import { YieldCalculatorService } from '../../core/data-access/yield-calculator.service';
import {FormsModule} from "@angular/forms";
import {YieldResultCardComponent} from "../ui/yield-result-card/yield-result-card.component";
import { MatButtonModule } from '@angular/material/button';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

import { formatNumber } from '@angular/common';

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
  agencyFees: number[] = [0.30,0.25,0.20]; // 30% for the first year, 25% for the second year, 20% for the third year
  results: any;

  constructor(private yieldCalculatorService: YieldCalculatorService) { }

  calculate(){
    this.results = this.yieldCalculatorService.calculateYield(this.purchasePrice, this.monthlyRent, this.agencyFees);
  }
}
