import { Injectable, numberAttribute } from '@angular/core';
import { ArticleSave } from '../../shared/models/article-save.model';
import { User } from '../../shared/models/user.model';
import { Article } from '../../shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleSaveService {
 private articleSaves: ArticleSave[] = [];

  getArticleSaveByOwnerID(id: number): ArticleSave | null {
    return this.articleSaves.find(a => a.owner_id === id) || null;
  }

  addArticleSave(owner: User, article: Article) {
    const existingSave = this.articleSaves.find(a => a.owner_id === owner.id);
    if (existingSave) {
      if (!existingSave.article_id.includes(article.id)) {
        existingSave.article_id.push(article.id);
      }
    } else {
      const newSave: ArticleSave = {
        id: this.articleSaves.length + 1,
        owner_id: owner.id,
        article_id: [article.id]
      };
      this.articleSaves.push(newSave);
    }
  }

  deleteArticleSave(owner: User, article: Article): boolean {
    const existingSave = this.articleSaves.find(a => a.owner_id === owner.id);
    if (existingSave) {
      const index = existingSave.article_id.indexOf(article.id);
      if (index !== -1) {
        existingSave.article_id.splice(index, 1);
        return true;
      } else {
        console.log('No hay index');
        return false;
      }
    } else {
      console.log('No hay save');
      return false;
    }
  }

  constructor() { }

  getSavedPublicationsCount(): number {
    return this.articleSaves.reduce((count, save) => count + save.article_id.length, 0);
  }
}
