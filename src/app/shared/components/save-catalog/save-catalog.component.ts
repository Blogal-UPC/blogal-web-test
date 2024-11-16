import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticleService } from '../../../core/services/article.services';
import { Article } from '../../models/article.model';
import {CategoryService} from '../../../core/services/category.services';
import {Category} from '../../models/category.model';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDivider} from '@angular/material/divider';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import { empty, map, Observable, startWith } from 'rxjs';
import { Tag } from '../../models/tag.model';
import { TagService } from '../../../core/services/tag.services';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { ArticleSaveService } from '../../../core/services/article-save.service';
import { ArticleSave } from '../../models/article-save.model';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-save-catalog',
  standalone: true,
  imports: [CommonModule, 
    FormsModule, 
    ArticleCardComponent, 
    MatCard, 
    MatCardContent, 
    MatDivider, 
    MatButtonToggleGroup, 
    MatButtonToggle,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './save-catalog.component.html',
  styleUrl: './save-catalog.component.css'
})
export class SaveCatalogComponent {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchQuery: string = '';
  categories: Category[] = [];
  filteredArticlesByTag: Article[] = [];
  filteredTags: Tag[]=[];
  tags: Tag[]=[];


  private articleService = inject(ArticleService);
  private articleSaveService = inject(ArticleSaveService);
  private authService=inject(AuthService);
  private snackBar=inject(MatSnackBar);

  myControl=new FormControl('');
  options:string[]=[];
  filteredOptions: Observable<string[]> = new Observable<[]>;


  ngOnInit(): void {
    this.filteredArticles=[];
    this.loadArticles();
    const user=this.authService.getcurrentUser();
    if(user){
      const articleSaves = this.articleSaveService.getArticleSaveByOwnerID(user.id);
      
      if (articleSaves){

        articleSaves.article_id.forEach(id => {

          const _article=this.articles.find(article=>article.id===id);
          if(_article){
            this.filteredArticles.push(_article);
          }
          ;
        });
      }
      else{
        this.filteredArticles=[];
        this.showSnackBar('Usted no ha guardado ningun artículo todavia');
      }
    }
  }
  
  showSnackBar(message:string) {
    this.snackBar.open(message,'Cerrar',{
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  loadArticles(): void {
    this.articles = this.articleService.getArticles();
    
  }
}