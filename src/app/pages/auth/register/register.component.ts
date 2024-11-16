import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../shared/models/user.model';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,MatButtonModule,MatInputModule,MatCardModule,MatSnackBarModule,RouterLink,MatOptionModule,MatFormFieldModule,MatSelectModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  registerForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private authService = inject(AuthService)

  constructor(){
    this.registerForm=this.fb.group({
      role:['',[Validators.required]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  controlHasError(control:string, error:string){
    return this.registerForm.controls[control].hasError(error);
  }
  showSnackBar(message:string) {
    this.snackBar.open(message,'Cerrar',{
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  } 

  onSubmit(){
    if(this.registerForm.valid){
      const newUser: User = {
        id: 0,
        ...this.registerForm.value,
      };

      const registeredUser = this.authService.register(newUser);

      if (registeredUser) {
        var _role:  string = '';
        if(registeredUser.role==='WRITER'){
          _role = 'ESCRITOR';
        }
        else if (registeredUser.role==='READER'){
          _role = 'LECTOR';

        }
        this.showSnackBar(
          `Registro exitoso, bienvenido ${registeredUser.firstName}, te has registrado como ${_role}`
        );
        this.router.navigate(['/auth/login']);
      } else {
        this.showSnackBar('Error al registrar el usuario');
      }
    }
  }
}
