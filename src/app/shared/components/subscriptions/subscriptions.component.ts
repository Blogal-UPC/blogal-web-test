import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SubscribeService } from '../../../core/services/subscribe.service';
import { AuthService } from '../../../core/services/auth.service';
import { Follower } from '../../models/follower.model';


@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule,MatInputModule,MatTableModule,MatFormFieldModule],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscriptionsComponent {

  private subscribeService=inject(SubscribeService);
  private authService=inject(AuthService);
  private currentUser=this.authService.getcurrentUser();
  subsList!: Follower;

  ngOnInit():void{
    const user=this.currentUser;
    if (user){
      const subs=this.subscribeService.getSubEmitterById(user.id);
      if(subs){
          this.subsList=subs;
        }
    }
    
  }
  deleteSubscription(id:number){

  }
}
