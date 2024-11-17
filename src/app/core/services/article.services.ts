import { Injectable } from '@angular/core';
import { Article } from '../../shared/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private article: Article[] = [
      {
        id: 1,
        author_id: 1,
        author: 'John Doe',
        title: 'Impacto del cambio climático en las precipitaciones globales',
        category: {
            id: 4,
            name: 'Meteorología',
            description: 'Estudios y análisis relacionados con el clima y sus fenómenos',
        },
        tags_id: [7, 17],
        publicationDate: new Date('2023-03-05'),
        summary: 'Un análisis de cómo el cambio climático afecta los patrones de precipitación a nivel mundial.',
        comments: [
          {
            id: 1,
            author: 'Carlos Montalbán',
            date: new Date('2023-03-06'),
            content: 'Excelente artículo. Muy informativo y bien redactado.',
            likes: 10,
            dislikes: 1,
            likedBy: [],
            dislikedBy: []
          },
          {
            id: 2,
            author: 'Laura Mendieta',
            date: new Date('2023-03-07'),
            content: 'Me gustó el análisis realizado sobre el clima. ¿Podrías incluir más gráficos?',
            likes: 2,
            dislikes: 1,
            likedBy: [],
            dislikedBy: []
          },
          {
            id: 3,
            author: 'Juan Pérez',
            date: new Date('2023-03-08'),
            content: 'Interesante punto de vista, aunque creo que faltó profundizar en algunos aspectos técnicos.',
            likes: 0,
            dislikes: 20,
            likedBy: [],
            dislikedBy: []
          }
        ]
    },
    {
        id: 2,
        author_id: 1,
        author: 'John Doe',
        title: 'Patrones de migración influenciados por el clima',
        category: {
            id: 4,
            name: 'Meteorología',
            description: 'Estudios y análisis relacionados con el clima y sus fenómenos',
        },
        tags_id: [17, 15],
        publicationDate: new Date('2023-06-12'),
        summary: 'Explora cómo los cambios climáticos afectan la migración de animales en diversas regiones.',
        comments: []
    },
    {
      id: 3,
      author_id: 3,
      author: 'Juan Solis',
      title: 'Evolución y adaptaciones de la flora desértica',
      category: {
          id: 5,
          name: 'Botánica',
          description: 'Categoría para temas relacionados a plantas y sus adaptaciones en diferentes ambientes',
      },
      tags_id: [16, 24],
      publicationDate: new Date('2023-02-21'),
      summary: 'Cómo las plantas del desierto sobreviven en condiciones extremas de calor y sequía.',
      comments: []
    },
    {
        id: 4,
        author_id: 3,
        author: 'Juan Solis',
        title: 'Diversidad de orquídeas en bosques tropicales',
        category: {
            id: 5,
            name: 'Botánica',
            description: 'Categoría para temas relacionados a plantas y sus adaptaciones en diferentes ambientes',
        },
        tags_id: [23, 11],
        publicationDate: new Date('2023-05-18'),
        summary: 'Exploración de la variedad de orquídeas y su importancia ecológica en los bosques tropicales.',
        comments: []
    },
    {
      id: 5,
      author_id: 4,
      author: 'Ana Smith',
      title: 'Impacto del derretimiento de glaciares en el nivel del mar',
      category: {
          id: 4,
          name: 'Meteorología',
          description: 'Artículos sobre el cambio climático y sus efectos en los ecosistemas.',
      },
      tags_id: [7, 21],
      publicationDate: new Date('2022-11-23'),
      summary: 'Estudio sobre cómo el deshielo de glaciares contribuye al aumento del nivel del mar y sus consecuencias.',
      comments: []
    },
    {
      id: 6,
      author_id: 4,
      author: 'Ana Smith',
      title: 'Fenómenos extremos: Tormentas y huracanes',
      category: {
          id: 4,
          name: 'Meteorología',
          description: 'Artículos sobre el cambio climático y sus efectos en los ecosistemas.',
      },
      tags_id: [3, 17],
      publicationDate: new Date('2023-02-12'),
      summary: 'Análisis de cómo el cambio climático intensifica los fenómenos meteorológicos extremos.',
      comments: []
    },
    {
      id: 7,
      author_id: 5,
      author: 'Miguel Poma',
      title: 'Adaptaciones de los animales nocturnos en el desierto',
      category: {
          id: 6,
          name: 'Zoología',
          description: 'Estudios y descubrimientos sobre la vida animal y sus adaptaciones.',
      },
      tags_id: [15, 16],
      publicationDate: new Date('2023-05-30'),
      summary: 'Investigación sobre cómo los animales nocturnos sobreviven en climas extremos del desierto.',
      comments: []
    },
    {
      id: 8,
      author_id: 5,
      author: 'Miguel Poma',
      title: 'Patrones migratorios de ballenas',
      category: {
          id: 6,
          name: 'Zoología',
          description: 'Estudios y descubrimientos sobre la vida animal y sus adaptaciones.',
      },
      tags_id: [10, 17],
      publicationDate: new Date('2023-07-05'),
      summary: 'Una exploración de las rutas migratorias de las ballenas y sus amenazas actuales.',
      comments: []
    },
    {
      id: 9,
      author_id:1,
      author:'John Doe',
      title: 'Historia de las tortugas',
      category: {
        id: 1,
        name:'Biología',
        description: 'Artículos de Biología',
      },
      tags_id:[2],
      publicationDate: new Date('2018-10-01'),
      summary:'Historia de la evolución de las tortugas',
      comments: []
    },
    {
      id: 10,
      author_id: 2,
      author: 'Jane Smith',
      title: 'Las maravillas del océano',
      category: {
        id: 2,
        name: 'Ecología',
        description: 'Libros sobre Ecología',
      },
      tags_id: [3],
      publicationDate: new Date('2019-05-15'),
      summary: 'Explora la biodiversidad y secretos del océano',
      comments: []
    },
    {
      id: 11,
      author_id: 1,
      author: 'John Doe',
      title: 'Introducción a la astronomía',
      category: {
        id: 3,
        name: 'Astronomía',
        description: 'Usa esta categoría para temas relacionados con el espacio y astronomía',
      },
      tags_id: [4],
      publicationDate: new Date('2020-07-21'),
      summary: 'Conoce los principios básicos de la astronomía',
      comments: []
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

  addComment(articleId: number, comment: Comment): void {
    const article = this.getArticleById(articleId);
    const com_aux:any = comment;
    if (article) {
      article.comments.push(com_aux);
    }
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
