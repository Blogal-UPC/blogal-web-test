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

@Component({
  selector: 'app-article-catalog',
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
  templateUrl: './article-catalog.component.html',
  styleUrl: './article-catalog.component.css'
})
export class ArticleCatalogComponent {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchQuery: string = '';
  categories: Category[] = [];
  filteredArticlesByTag: Article[] = [];
  filteredTags: Tag[]=[];
  tags: Tag[]=[];

  private articleService = inject(ArticleService);
  private categoryService = inject(CategoryService);
  private tagService = inject(TagService);

  myControl=new FormControl('');
  options:string[]=[];
  filteredOptions: Observable<string[]> = new Observable<[]>;


  ngOnInit(): void {
    this.loadArticles();
    this.tagService.getTags().forEach(tag=>{
      this.options.push('#'+tag.name);
    });
    this.filteredOptions=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter(value||'')),
    )
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().startsWith(filterValue));
  }

  loadArticles(): void {
    this.articles = this.articleService.getArticles();
    this.categories = this.categoryService.getCategories();
    this.filteredArticles = [...this.articles];
  }

  filterArticles(): void {
    
    if (this.searchQuery.startsWith('#')){
      this.filterArticlesByTag(this.searchQuery);
    }
    else if(this.searchQuery.startsWith(':')){
      this.filterArticlesByAuthor();
    }
    else{
      this.filteredArticles = this.articles.filter(article =>
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        article.category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
  filterArticlesByAuthor(): void {
    const authors = this.searchQuery
      .split(',')
      .map(author => author.substring(1).toLowerCase());
  
    this.filteredArticles = this.articles.filter(article =>
      authors.some(author => article.author.toLowerCase().startsWith(author))
    );
  }
  filterArticlesByTag(tag:string):void{
    this.filteredTags=[];
    const _tags = this.searchQuery.split(',');
      _tags.forEach(tag => {
      if(tag){
        tag=tag.substring(1);
        if(this.tagService.getTagByName(tag)){
        this.filteredTags.push(this.tagService.getTagByName(tag)!);
        }
      }
    });
    if(this.filteredTags.length>0){
      this.filteredTags.forEach(tag_=>{
        this.filteredArticles = this.articles.filter(article=>{
          console.log(tag_.id);
          console.log(article.tags_id);

          return article.tags_id.includes(tag_.id);
        })
      })
    }
    
  }

  filterArticlesByCategories(event: any): void {
    const selectedCategories = event.value;
    this.filteredArticles = this.articles.filter(article =>
      selectedCategories.includes(article.category.id),
    );
    if (selectedCategories.length===0){
      this.filteredArticles=this.articles;
    }
    // Aplicar la búsqueda por título o categoría si hay una consulta de búsqueda activa
    
    if (this.searchQuery.startsWith('#')) {
      this.filterArticlesByTag(this.searchQuery);
    }
    else if (this.searchQuery) {
      this.filterArticles();
    }
    
  }
}
