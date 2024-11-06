import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, MatButton],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  @Input() articles: Article[] = [];
}
