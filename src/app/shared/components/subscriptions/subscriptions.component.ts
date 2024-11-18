import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SubscribeService } from '../../../core/services/subscribe.service';
import { AuthService } from '../../../core/services/auth.service';
import { Follower } from '../../models/follower.model';
import { User } from '../../models/user.model';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, FormsModule,MatInputModule],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscriptionsComponent {

  private subscribeService=inject(SubscribeService);
  private authService=inject(AuthService);
  private currentUser=this.authService.getcurrentUser();
  subsList: User[] = [];

  ngOnInit():void{
    const user=this.currentUser;
    if (user){
      const subs=this.subscribeService.getSubEmitterById(user.id);
      if(subs){
          subs.receptor_id.forEach(s => {
            this.subsList?.push(this.authService.getUserById(s)!);
          });
      }
    }
    
  }
  deleteSubscription(id:number){
    if(this.currentUser){
      this.subscribeService.deleteSubscription(this.currentUser.id,id);
     this.subsList= this.subsList.filter(s=>s.id!==id);
    }
  }
}