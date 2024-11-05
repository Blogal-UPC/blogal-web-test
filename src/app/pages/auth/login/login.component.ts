import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginCredentials } from '../../../shared/models/login-credentials.model';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,MatButtonModule,MatInputModule,MatCardModule,MatSnackBarModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private authService = inject(AuthService)

  constructor(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  controlHasError(control:string, error:string){
    return this.loginForm.controls[control].hasError(error);
  }
  showSnackBar(message:string) {
    this.snackBar.open(message,'Cerrar',{
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  } 

  onSubmit(){
    if(this.loginForm.valid){
      const credentials: LoginCredentials = this.loginForm.value;

      const user = this.authService.login(credentials);

      if (user) {
        this.showSnackBar(`Bienvenido, ${user.firstName}`);


        if (user.role === 'WRITER') {
          this.router.navigate(['/writer/homepage']);
        } else if (user.role === 'READER') {
          this.router.navigate(['/reader/read']);
        }
      } else {
        this.showSnackBar('Correo o contraseña incorrectos.');
      }
    }
  }
}
