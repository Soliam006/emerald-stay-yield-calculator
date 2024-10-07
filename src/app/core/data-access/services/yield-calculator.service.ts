import { Injectable } from '@angular/core';
import {YieldReturn} from "../../../shared/models/yield-return.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class YieldCalculatorService {

  constructor(private snackBar: MatSnackBar) { }

  calculateYield( purchasePrice: number, monthlyRent: number ,
                              agencyFees: number[]): { totalReturn: number; returns: YieldReturn[] } {

    let results = {
      totalReturn: 0,
      returns :  [] as YieldReturn[]
    }

    let totalYears : number = 0;

    // Calculate the net income and annual profitability for each year
    for (let i = 0; i < agencyFees.length; i++) {
      let netIncome : number = monthlyRent  - (monthlyRent * agencyFees[i]);
      let annualNetIncome : number =((netIncome*12) / purchasePrice ) * 100 ;
      totalYears += annualNetIncome;
      //Save the results in an Array
      results.returns.push({ year: i+1, netIncomeMonthly: netIncome,
        annualProfitability: annualNetIncome });
    }
    // Calculate the total return
    results.totalReturn = totalYears;

    return results;
  }
}
