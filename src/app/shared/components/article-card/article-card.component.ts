import {Component, inject, Input} from '@angular/core';
import {Article} from '../../models/article.model';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {ArticleSaveService} from '../../../core/services/article-save.service';
import {AuthService} from '../../../core/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, MatButton],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  @Input() articles: Article[] = [];
  @Input() showSaveButton: boolean = true;
  private articleSaveService = inject(ArticleSaveService);
  private authService = inject(AuthService);
  private snackBar = inject(MatSnackBar);

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom',
    });
  }

  addArticleSave(article: Article) {
    const user = this.authService.getcurrentUser();
    if (user) {
      this.articleSaveService.addArticleSave(user, article);
      this.showSnackBar('Artículo guardado para ver más tarde');
    } else {
      this.showSnackBar('no hay usuario');
    }
  }

  deleteArticleSave(article: Article) {
    const user = this.authService.getcurrentUser();

    if (user) {
      if (this.articleSaveService.deleteArticleSave(user, article)) {
        this.showSnackBar('Se ha eliminado el artículo de guardados');
        this.articles = this.articles.filter(a => a.id !== article.id);
      } else {
        this.showSnackBar('No se ha podido eliminar el artículo de guardados');
      }
    } else {

      this.showSnackBar('Error, no se pudo obtener el usuario actual');
    }
  }
}


