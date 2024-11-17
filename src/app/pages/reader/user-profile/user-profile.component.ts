import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ArticleSaveService } from '../../../core/services/article-save.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule]
})
export class UserProfileComponent implements OnInit {
  userName: string = '';
  userDescription: string = 'Descripción del lector';
  savedPublicationsCount: number = 0;

  constructor(
    private authService: AuthService,
    private articleSaveService: ArticleSaveService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const user = this.authService.getcurrentUser(); // Obtener el usuario desde el servicio de autenticación
    this.userName = `${user?.firstName} ${user?.lastName}`;
    this.userDescription = user?.description || 'Descripción vacía';
    this.savedPublicationsCount = this.articleSaveService.getSavedPublicationsCount(); // Obtener el conteo de publicaciones guardadas
  }

  editDescription(): void {
    const modal = this.renderer.selectRootElement('#editDescriptionModal', true);
    this.renderer.setStyle(modal, 'display', 'block');
  }

  saveDescription(): void {
    const modal = this.renderer.selectRootElement('#editDescriptionModal', true);
    this.renderer.setStyle(modal, 'display', 'none');
    this.updateDescription(this.userDescription);
  }

  updateDescription(newDescription: string): void {
    this.userDescription = newDescription;
    // Aquí puedes agregar lógica para guardar la nueva descripción en el backend
  }
}