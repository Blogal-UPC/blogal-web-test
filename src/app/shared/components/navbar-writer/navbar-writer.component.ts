import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar-writer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-writer.component.html',
  styleUrl: './navbar-writer.component.css'
})
export class NavbarWriterComponent {
  private authService =inject(AuthService);
  private router=inject(Router);
  
  id = this.authService._currentUser?.id;

  constructor() {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
  goToAddArticle(): void {
    this.router.navigate(['writer/articles/add']);
  }
}
