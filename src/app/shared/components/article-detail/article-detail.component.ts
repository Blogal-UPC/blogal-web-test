import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../core/services/article.services';
import { Tag } from '../../models/tag.model';
import { TagService } from '../../../core/services/tag.services';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatCard, MatCardContent} from '@angular/material/card';
import {ArticleSaveService} from '../../../core/services/article-save.service';
import {AuthService} from '../../../core/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatIconButton, MatCard, MatCardContent],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'


})
export class ArticleDetailComponent {
  article: Article | null = null;
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);
  private tagService = inject(TagService);
  private router = inject(Router);
  private location = inject(Location);

  tags_list: Tag[]=[];

  private articleSaveService = inject(ArticleSaveService);
  private authService = inject(AuthService);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    const articleId = Number(this.route.snapshot.paramMap.get('id'));

    if (articleId) {
      this.article = this.articleService.getArticleById(articleId);
      const tags = this.article?.tags_id
      tags?.forEach((tag) =>{
        this.tags_list.push(this.tagService.getTagById(tag)!);
      });
    }
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom',
    });
  }

  addArticleSave(article: Article){
    const user=this.authService.getcurrentUser();
    if(user){
      this.articleSaveService.addArticleSave(user,article);
      this.showSnackBar('Artículo guardado para ver más tarde');
    }
    else{
      this.showSnackBar('no hay usuario');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
