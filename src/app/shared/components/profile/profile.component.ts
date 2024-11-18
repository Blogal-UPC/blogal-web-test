import { CommonModule, Location } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ArticleSaveService } from '../../../core/services/article-save.service';
import { User } from '../../models/user.model';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { SubscribeService } from '../../../core/services/subscribe.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule,MatToolbarModule,MatIconModule,MatIconButton],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName: string = '';
  userDescription: string = 'Descripción del lector';
  savedPublicationsCount: number = 0;

  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private articleSaveService  = inject(ArticleSaveService);
  private renderer = inject(Renderer2);
  private suscribeService=inject(SubscribeService);

  private location = inject(Location);
  userProfile: User|null=null;
  currentUser = this.authService.getcurrentUser();

  ngOnInit(): void {
    const userId=Number(this.route.snapshot.paramMap.get('id'));
    if(!userId){
      return;
    }
    this.userProfile = this.authService.getUserById(userId);
    this.loadUserProfile(userId);
  }

  loadUserProfile(id:number): void {
    this.userName = `${this.userProfile?.firstName} ${this.userProfile?.lastName}`;
    this.userDescription = this.userProfile?.description || 'Descripción vacía';
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

  goBack(): void {
    this.location.back();
  }
  subscribe(){
    if(this.currentUser&&this.userProfile){
      this.suscribeService.addSubscription(this.currentUser.id,this.userProfile?.id);
    }
  }
}
