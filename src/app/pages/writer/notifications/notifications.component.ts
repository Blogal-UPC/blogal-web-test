import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit  } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatIconModule,MatButtonModule,MatIconButton],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  private location = inject(Location);
  notifications = [
    { message: 'Rafael Chui le ha donado 2$' },
    { message: 'Axel Pariona le ha donado 5$' },
    { message: 'Marsi Figueroa le ha donado 3$' },
    { message: 'Rodrigo Meza le ha donado 3$' }
  ];
  goBack(): void {
    this.location.back();
  }
  markAsRead(index: number): void {
    this.notifications.splice(index, 1);
  }

  clearAllNotifications(): void {
    this.notifications = [];
  }
}
