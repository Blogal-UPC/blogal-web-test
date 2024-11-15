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
      plan: 'ENTERPRISE'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'reader@example.com',
      password: 'password123',
      role: 'READER',
      plan: 'PRO'
    },
    {
      id: 3,
      firstName: 'Juan',
      lastName: 'Solis',
      email: 'writer3@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'BASIC'
    },
    {
      id: 4,
      firstName: 'Ana',
      lastName: 'Smith',
      email: 'writer4@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO'
    },
    {
      id: 5,
      firstName: 'Miguel',
      lastName: 'Poma',
      email: 'writer5@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'ENTERPRISE'
    },
    {
      id: 6,
      firstName: 'Gustavo',
      lastName: 'Cruz',
      email: 'reader6@example.com',
      password: 'password123',
      role: 'READER',
      plan: 'ENTERPRISE'
    },
    {
      id: 7,
      firstName: 'Carlos',
      lastName: 'Ruiz',
      email: 'reader7@example.com',
      password: 'password123',
      role: 'READER',
      plan: 'BASIC'
    },
    {
      id: 8,
      firstName: 'Antonio',
      lastName: 'Poma',
      email: 'writer8@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO'
    },
    {
      id: 9,
      firstName: 'Juan',
      lastName: 'Carlos',
      email: 'writer9@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO'
    },
    {
      id: 10,
      firstName: 'Ricardo',
      lastName: 'Ricardo',
      email: 'writer10@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO'
    },
    {
      id: 11,
      firstName: 'Hugo',
      lastName: 'Puertas',
      email: 'writer11@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO'
    },
  ];
  constructor() { }
  private _currentUser:User | null=null;
  getcurrentUser():User|null{
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
