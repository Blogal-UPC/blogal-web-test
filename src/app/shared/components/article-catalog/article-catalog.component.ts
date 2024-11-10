import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticleService } from '../../../core/services/article.services';
import { Article } from '../../models/article.model';
import {CategoryService} from '../../../core/services/category.services';
import {Category} from '../../models/category.model';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDivider} from '@angular/material/divider';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-article-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticleCardComponent, MatCard, MatCardContent, MatDivider, MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './article-catalog.component.html',
  styleUrl: './article-catalog.component.css'
})
export class ArticleCatalogComponent {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchQuery: string = '';
  categories: Category[] = [];

  private articleService = inject(ArticleService);
  private categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articles = this.articleService.getArticles();
    this.categories = this.categoryService.getCategories();
    this.filteredArticles = [...this.articles];
  }

  filterArticles(): void {
    this.filteredArticles = this.articles.filter(article =>
      article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      article.category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  filterArticlesByCategories(event: any): void {
    const selectedCategories = event.value;
    this.filteredArticles = this.articles.filter(article =>
      selectedCategories.includes(article.category.id)
    );
    // Aplicar la búsqueda por título o categoría si hay una consulta de búsqueda activa
    if (this.searchQuery) {
      this.filterArticles();
    }
  }
}
