import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-followed-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './followed-list.component.html',
  styleUrls: ['./followed-list.component.css']
})
export class FollowedListComponent {
  followedWriters = [
    { name: 'John Doe', publicationsUrl: '/reader/catalog' },
    { name: 'Juan Solis', publicationsUrl: '/reader/catalog' },
    // Añadir más escritores según sea necesario
  ];
}