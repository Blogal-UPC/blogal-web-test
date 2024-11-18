import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Article } from '../../../shared/models/article.model';
import { ArticleDetail } from '../../../shared/models/article-detail.model';
import { ArticleService } from '../../../core/services/article.services';
import { AuthService } from '../../../core/services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatIconButton],

  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormComponent implements OnInit{
  content: string = '';
  coauthors: string[] = [];
  allAuthors: string[] = ['John Doe', 'Juan Solis', 'Ana Smith', 'Miguel Poma', 'Jane Smith']; // Lista estática de autores
  previewContent: string = '';
  solo_suscriptores: boolean = false;
  articleForm:FormGroup;
  private fb = inject(FormBuilder);
  private snackBar=inject(MatSnackBar);
  private articleService=inject(ArticleService);
  private authService=inject(AuthService);
  private currentUser=this.authService.getcurrentUser();
  private location = inject(Location);

  constructor() {
    this.articleForm=this.fb.group({
      title:['',[Validators.required]],
      content:['',[Validators.required]],
      forSubs:[false],
    });
  }

  ngOnInit(): void {}
  showSnackBar(message:string) {
    this.snackBar.open(message,'Cerrar',{
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  } 
  goBack(): void {
    this.location.back();
  }
  addCoauthor(coauthor: string | null): void {
    if (coauthor && !this.coauthors.includes(coauthor)) {
      this.coauthors.push(coauthor);
    }
  }
  controlHasError(control:string, error:string){
    return this.articleForm.controls[control].hasError(error);
  }
  onAuthorSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedAuthor = selectElement.value;
    this.addCoauthor(selectedAuthor);
  }

  updatePreview(content: string) {
    this.previewContent = content;
  }

  publish(): void {
    if(this.articleForm.valid){
      var tipoDeArticulo: 'FREE' | 'SUBS';
      if(this.articleForm.get('forSubs')?.value){
        tipoDeArticulo="SUBS";
      }
      else{
        tipoDeArticulo="FREE";
      }
      const newArticle:Article={
        id: 0,
        author_id: this.currentUser!.id,
        author: this.currentUser?.firstName+' '+this.currentUser?.lastName,
        title: this.articleForm.get('title')?.value,
        category: {
          id:10,
          name:'',
          description:'',
        },
        type:tipoDeArticulo,
        tags_id: [],
        publicationDate: new Date,
        summary: '',
        comments: [],
      }
      const newArticleDetail:ArticleDetail={
        id:0,
        content:this.articleForm.get('content')?.value,
        image:["assets/article_placeholder.png"],
      }
      this.articleService.addArticle(newArticle,newArticleDetail); 
      this.showSnackBar('Se ha creado la publicación ' + newArticle.title);
    }
    else{
      this.showSnackBar('Faltan elementos en tu artículo');
    }
  }
  importTemplate(template: string) {
    // Lógica para importar la plantilla seleccionada
    if (template === 'academic') {
      this.content = 'Plantilla de Texto Académico\n\n[Escribe tu contenido académico aquí...]';
    } else if (template === 'blog') {
      this.content = 'Plantilla de Blog\n\n[Escribe tu contenido de blog aquí...]';
    }
  }
}
