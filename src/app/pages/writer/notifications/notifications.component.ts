import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications = [
    { message: 'Rafael Chui le ha donado 2$' },
    { message: 'Axel Pariona le ha donado 5$' },
    { message: 'Marsi Figueroa le ha donado 3$' },
    { message: 'Rodrigo Meza le ha donado 3$' }
  ];

  markAsRead(index: number): void {
    this.notifications.splice(index, 1);
  }

  clearAllNotifications(): void {
    this.notifications = [];
  }
}