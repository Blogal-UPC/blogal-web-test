import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginCredentials } from '../../models/login-credentials.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-home.component.html',
  styleUrl: './navbar-home.component.css'
})
export class NavbarHomeComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  

  onSubmitReader(){
    const credentials: LoginCredentials = {email: 'reader@example.com',password: 'password123'};
    const user = this.authService.login(credentials);
    this.router.navigate(['/reader/homepage']);
  }
  onSubmitWriter(){
    const credentials: LoginCredentials = {email: 'writer@example.com',password: 'password123'};
    const user = this.authService.login(credentials);
    this.router.navigate(['/writer/homepage']);
  }
}

