import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,MatButtonModule,MatInputModule,MatCardModule,MatSnackBarModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  registerForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  constructor(){
    this.registerForm=this.fb.group({
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
      verticalPosition: 'bottom',
    });
  } 

  onSubmit(){
    if(this.registerForm.valid){
      const credentials = this.registerForm.value;
      console.log('Credenciales:', credentials);
      this.showSnackBar('Inicio de sesión exitoso');
    }
  }
}
