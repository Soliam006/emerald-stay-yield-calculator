import { Injectable } from '@angular/core';
import {YieldReturn} from "../../shared/models/yield-return.model";

@Injectable({
  providedIn: 'root'
})
export class YieldCalculatorService {

  calculateYield( purchasePrice: number, monthlyRent: number,
                              agencyFees: number[]): any{
    let results = {
      netIncomeMonthly: 0,
      returns :  [] as YieldReturn[]
    }

    // Calculate the net income monthly and the return on investment for the first 3 years
    let totalAnnualRent = monthlyRent * 12;
    let netIncomeFirstYear = totalAnnualRent * (1- agencyFees[0]);
    let netIncomeSecondYear = totalAnnualRent * (1- agencyFees[1]);
    let netIncomeThirdYear = totalAnnualRent * (1- agencyFees[2]);

    //Save the results in an Array
    results.netIncomeMonthly = totalAnnualRent / 12;
    results.returns.push({ year: 1, netIncome: netIncomeFirstYear });
    results.returns.push({ year: 2, netIncome: netIncomeSecondYear });
    results.returns.push({ year: 3, netIncome: netIncomeThirdYear });

    return results;
  }
  constructor() { }
}
