import { Component, inject } from '@angular/core';
import { Article } from '../../../shared/models/article.model';
import { ArticleService } from '../../../core/services/article.services';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  articles:Article[]=[];
  filteredArticles: Article[] = [];
  displayedColumns: string[] = ['title', 'category', 'publicationDate', 'actions'];

  private articleService = inject(ArticleService);
  private router = inject(Router);
  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articles = this.articleService.getArticles();
    this.filteredArticles = this.articles;
  }

  filterArticles(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredArticles = this.articles.filter(aritcle =>
      aritcle.title.toLowerCase().includes(query) ||
      aritcle.category.name.toLowerCase().includes(query)
    );
  }


  deleteArticle(id: number): void {
    const confirmed = confirm('¿Estás seguro de que deseas eliminar este artículo?');
    if (confirmed) {
      const success = this.articleService.deleteArticle(id);
      if (success) {
        this.articles = this.articles.filter(article => article.id !== id);
        this.filterArticles();
      }
    }
  }

  goToAddArticle(): void {
    this.router.navigate(['writer/articles/add']);
  }
}
