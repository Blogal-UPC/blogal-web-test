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
import { MatSnackBar } from '@angular/material/snack-bar';
import { FollowService } from '../../../core/services/follow.service';

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
  private followService=inject(FollowService);

  private location = inject(Location);
  userProfile: User|null=null;
  currentUser = this.authService.getcurrentUser();
  private snackBar=inject(MatSnackBar);
  editingDescription : boolean =false;

  showSnackBar(message:string) {
    this.snackBar.open(message,'Cerrar',{
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  } 

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
    this.editingDescription=true;
    
  }

  saveDescription(): void {
    
    this.updateDescription(this.userDescription);
    this.editingDescription=false;
  }

  updateDescription(newDescription: string): void {
    this.userDescription = newDescription;
    // Aquí puedes agregar lógica para guardar la nueva descripción en el backend
  }

  goBack(): void {
    this.location.back();
  }
  subscribe(){
    const subs = this.suscribeService.getSubEmitterById(this.currentUser!.id)

    if(subs?.receptor_id.find(id=>id===this.userProfile?.id)){
      this.showSnackBar('Ya te has suscrito a '+ this.userProfile?.firstName + ' ' + this.userProfile?.lastName)
      return
    }
    if(this.currentUser&&this.userProfile){
      this.suscribeService.addSubscription(this.currentUser.id,this.userProfile?.id);
      this.showSnackBar('Se ha suscrito ' + this.userProfile.firstName + ' ' + this.userProfile.lastName)
    }
    else{
      this.showSnackBar('No se ha podido realizar la subscripción')
    }
  }
  follow(){
    const follows = this.followService.getFollowEmitterById(this.currentUser!.id)

    if(follows?.receptor_id.find(id=>id===this.userProfile?.id)){
      this.showSnackBar('Ya sigues a '+ this.userProfile?.firstName + ' ' + this.userProfile?.lastName)
      return
    }
    if(this.currentUser&&this.userProfile){
      this.followService.addFollow(this.currentUser.id,this.userProfile?.id);
      this.showSnackBar('Ahora sigues a ' + this.userProfile.firstName + ' ' + this.userProfile.lastName)
    }
    else{
      this.showSnackBar('No se ha podido seguir al usuario')
    }
  }

}
