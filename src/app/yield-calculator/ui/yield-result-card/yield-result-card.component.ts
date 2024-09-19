import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-yield-result-card',
  standalone: true,
  imports: [],
  templateUrl: './yield-result-card.component.html',
  styleUrl: './yield-result-card.component.css'
})
export class YieldResultCardComponent {
  @Input() results!: any;
}
