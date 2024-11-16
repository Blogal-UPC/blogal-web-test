import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followed-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './followed-list.component.html',
  styleUrls: ['./followed-list.component.css']
})
export class FollowedListComponent {
  followedWriters = [
    { name: 'John Doe' },
    { name: 'Juan Solis' },
    // Añadir más escritores según sea necesario
  ];

  constructor(private router: Router) {}

  viewPublications(writerName: string) {
    const formattedName = `:${writerName}`;
    this.router.navigate(['/reader/catalog'], { queryParams: { searchQuery: formattedName } });
  }
}