import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { LoginComponent } from '../../pages/auth/login/login.component';
import { LoginCredentials } from '../../shared/models/login-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[]=[
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'writer@example.com',
      password: 'password123',
      role: 'WRITER',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'reader@example.com',
      password: 'password123',
      role: 'READER',
    },
  ];
  constructor() { }
  private _currentUser:User | null=null;
  get currentUser():User|null{
    return this._currentUser;
  }
  register(newUser:User):User|null{
    const existingUser=this.users.find(user=>user.email===newUser.email);
    if (existingUser){
      return null
    }
    const user: User={
      ...newUser,
      id:this.users.length+1,
    };
    this.users.push(user);
    return user;
  }
  login(credentials:LoginCredentials):User|null{
    const user = this.users.find(
      u => u.email === credentials.email && u.password === credentials.password);
    if(user){
      this._currentUser=user;
      return user;

    }
    else {
      return null;
    }
  } 
  logout():void{
    this._currentUser=null;
    console.log('Sesion cerrada');
  }
}
