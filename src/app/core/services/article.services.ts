import { Injectable } from '@angular/core';
import { Article } from '../../shared/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private article: Article[] = [
    {
      id: 1,
      id_author:1,
      author:'John Doe',
      title: 'Historia de las tortugas',
      category: {
        id: 1,
        name:'Biología',
        description: 'Artículos de Biología',
      },
      tags:{
        id:1,
        name:'Tortugas',
        description:'',
      },
      publicationDate: new Date('2018-10-01'),
      summary:'Historia de la evolución de las tortugas',
    },
    {
        id: 2,
        id_author: 2,
        author: 'Jane Smith',
        title: 'Las maravillas del océano',
        category: {
          id: 2,
          name: 'Ecología',
          description: 'Libros sobre Ecología',
        },
        tags: {
          id: 2,
          name: 'Océano',
          description: 'Artículos relacionados con el océano y la vida marina',
        },
        publicationDate: new Date('2019-05-15'),
        summary: 'Explora la biodiversidad y secretos del océano',
      },
      {
        id: 3,
        id_author: 1,
        author: 'John Doe',
        title: 'Introducción a la astronomía',
        category: {
          id: 3,
          name: 'Astronomía',
          description: 'Usa esta categoría para temas relacionados con el espacio y astronomía',
        },
        tags: {
          id: 3,
          name: 'Estrellas',
          description: 'Artículos relacionados con estrellas y constelaciones',
        },
        publicationDate: new Date('2020-07-21'),
        summary: 'Conoce los principios básicos de la astronomía',
      },
    
  ];

  constructor() {}

  private nextId = this.article.length + 1;

  addArticle(article: Article): Article {
    article.id = this.nextId++;
    this.article.push(article);
    return article;
  }

  getArticles(): Article[] {
    return this.article;
  }

  getArticleById(id: number): Article | null {
    return this.article.find(a => a.id === id) ?? null;
  }

  deleteArticle(id: number): boolean {
    const index = this.article.findIndex(a => a.id === id);
    if (index !== -1) {
      this.article.splice(index, 1);
      return true;
    }
    return false;
  }
}
