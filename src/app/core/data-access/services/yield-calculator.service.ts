import { Injectable } from '@angular/core';
import {YieldReturn} from "../../../shared/models/yield-return.model";

@Injectable({
  providedIn: 'root'
})
export class YieldCalculatorService {

  calculateYield( purchasePrice: number, monthlyRent: number ,
                              agencyFees: number[]): any{

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
  constructor() { }
}
