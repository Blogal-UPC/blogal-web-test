import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { SubscribeService } from '../../../core/services/subscribe.service';

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
export class ArticleCatalogComponent implements OnInit {
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
  private authService=inject(AuthService);
  private subscriptionService=inject(SubscribeService);


  private currentUser=this.authService.getcurrentUser();
  private subscriptions=this.subscriptionService.getSubEmitterById(this.currentUser!.id);

  constructor(private route: ActivatedRoute) {}

  myControl=new FormControl('');
  options:string[]=[];
  filteredOptions: Observable<string[]> = new Observable<[]>;


  ngOnInit(): void {
    this.loadArticles();
    this.filterArticlesBySubscription();
    this.tagService.getTags().forEach(tag=>{
      this.options.push('#'+tag.name);
    });
    this.filteredOptions=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter(value||'')),
    )
    this.route.queryParams.subscribe(params => {
      if (params['searchQuery']) {
        this.searchQuery = params['searchQuery'];
        this.filterArticles();
      }
    });
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
  filterArticlesBySubscription(){
    const allowedArticles=this.articles.filter(a=>{
      if(a.type==='FREE'){
        return true
      }
      if(this.currentUser?.plan==='PRO'||this.currentUser?.plan==='ENTERPRISE'){
        return true
      }
      if(this.subscriptions?.receptor_id.find(a=>a===this.currentUser?.id)){
        return true;
      }
      return false;
    })
    this.articles = allowedArticles;
    this.filteredArticles = allowedArticles;
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
  onAuthorSelected(author:string){
    this.searchQuery=`:${author}`;
    this.filterArticles();
  }
}
