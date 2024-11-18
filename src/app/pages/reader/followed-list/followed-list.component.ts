import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FollowService } from '../../../core/services/follow.service';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../shared/models/user.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-followed-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, FormsModule,MatInputModule,MatToolbarModule,MatButtonModule,MatIconButton,MatIconModule],
  templateUrl: './followed-list.component.html',
  styleUrls: ['./followed-list.component.css']
})
export class FollowedListComponent {
  private followService=inject(FollowService);
  private authService=inject(AuthService);
  private currentUser=this.authService.getcurrentUser();
  followList: User[] = [];
  private location = inject(Location);

  ngOnInit():void{
    const user=this.currentUser;
    if (user){
      const subs=this.followService.getFollowEmitterById(user.id);
      if(subs){
          subs.receptor_id.forEach(s => {
            this.followList?.push(this.authService.getUserById(s)!);
          });
      }
    }
    
  }
  goBack(): void {
    this.location.back();
  }
  deleteFollow(id:number){
    if(this.currentUser){
      this.followService.deleteFollow(this.currentUser.id,id);
      this.followList= this.followList.filter(s=>s.id!==id);
    }
  }
}