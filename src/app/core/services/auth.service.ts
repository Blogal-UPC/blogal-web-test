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
      plan: 'ENTERPRISE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'reader@example.com',
      password: 'password123',
      role: 'READER',
      plan: 'PRO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
    {
      id: 3,
      firstName: 'Juan',
      lastName: 'Solis',
      email: 'writer2@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'BASIC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
    {
      id: 4,
      firstName: 'Ana',
      lastName: 'Smith',
      email: 'writer3@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
    {
      id: 5,
      firstName: 'Miguel',
      lastName: 'Poma',
      email: 'writer4@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'ENTERPRISE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
    {
      id: 6,
      firstName: 'Gustavo',
      lastName: 'Cruz',
      email: 'reader2@example.com',
      password: 'password123',
      role: 'READER',
      plan: 'ENTERPRISE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
    {
      id: 7,
      firstName: 'Carlos',
      lastName: 'Ruiz',
      email: 'reader3@example.com',
      password: 'password123',
      role: 'READER',
      plan: 'BASIC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
    {
      id: 8,
      firstName: 'Antonio',
      lastName: 'Poma',
      email: 'writer5@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
    {
      id: 9,
      firstName: 'Juan',
      lastName: 'Carlos',
      email: 'writer6@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
    {
      id: 10,
      firstName: 'Ricardo',
      lastName: 'Ricardo',
      email: 'writer7@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
    {
      id: 11,
      firstName: 'Hugo',
      lastName: 'Puertas',
      email: 'writer8@example.com',
      password: 'password123',
      role: 'WRITER',
      plan: 'PRO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia. Nullam nec purus ut sem malesuada ultrices. Sed nec eros ut nisi ultricies lacinia.'

    },
  ];
  constructor() { }
  public _currentUser:User | null=null;
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
