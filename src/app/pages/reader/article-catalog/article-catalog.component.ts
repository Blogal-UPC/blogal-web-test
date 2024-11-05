import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleCardComponent } from '../../../shared/components/article-card/article-card.component';
import { ArticleService } from '../../../core/services/article.services';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-article-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticleCardComponent],
  templateUrl: './article-catalog.component.html',
  styleUrl: './article-catalog.component.css'
})
export class ArticleCatalogComponent {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchQuery: string = '';

  private articleService = inject(ArticleService);

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articles = this.articleService.getArticles();
    this.filteredArticles = [...this.articles];
  }

  filterArticles(): void {
    this.filteredArticles = this.articles.filter(article =>
      article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      article.category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
