import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'yield',
    loadComponent: () => import('./yield-calculator/features/yield-calculator.component').then(m => m.YieldCalculatorComponent)
  }
];
