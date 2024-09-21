import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-yield-result-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './yield-result-card.component.html',
  styleUrl: './yield-result-card.component.css'
})
export class YieldResultCardComponent {
  @Input() results!: any;
}
