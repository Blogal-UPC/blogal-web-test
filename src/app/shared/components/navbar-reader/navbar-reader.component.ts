import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar-reader',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-reader.component.html',
  styleUrl: './navbar-reader.component.css'
})
export class NavbarReaderComponent {
  private authService =inject(AuthService);
  private router=inject(Router);
  id = this.authService._currentUser?.id;

  constructor() {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
