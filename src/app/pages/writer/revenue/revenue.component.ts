import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css'
})
export class RevenueComponent {
  revenues = [
    { month: 'January', donationsCount: 2, total: 5 },
    { month: 'February', donationsCount: 8, total: 20 },
    { month: 'March', donationsCount: 22, total: 55 },
  ];
}
