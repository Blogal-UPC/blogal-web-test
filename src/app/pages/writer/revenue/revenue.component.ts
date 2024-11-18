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
    { month: 'Diciembre 2023', donationsCount: 0, total: 0 },
    { month: 'Enero 2024', donationsCount: 2, total: 5 },
    { month: 'Febrero 2024', donationsCount: 8, total: 20 },
    { month: 'Marzo 2024', donationsCount: 22, total: 55 },
    { month: 'Abril 2024', donationsCount: 17, total: 42.5 }
  ];
}
