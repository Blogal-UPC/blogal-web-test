import { Injectable } from '@angular/core';
import { Article } from '../../shared/models/article.model';
import { ArticleDetail } from '../../shared/models/article-detail.model';

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
        type:'FREE',
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
        type:'FREE',
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
      type:'FREE',
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
        type:'FREE',
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
      type:'FREE',
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
      type:'FREE',
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
      type:'FREE',
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
      type:'FREE',
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
      type:'FREE',
      tags_id:[2],
      publicationDate: new Date('2018-10-01'),
      summary:'Historia de la evolución de las tortugas',
      comments: []
    },
    {
      id: 10,
      author_id: 5,
      author: 'Miguel Poma',
      title: 'Las maravillas del océano',
      category: {
        id: 2,
        name: 'Ecología',
        description: 'Libros sobre Ecología',
      },
      type:'FREE',
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
      type:'FREE',
      tags_id: [4],
      publicationDate: new Date('2020-07-21'),
      summary: 'Conoce los principios básicos de la astronomía',
      comments: []
    },
    {
      id: 12,
      author_id: 1,
      author: 'John Doe',
      title: 'Artículo especial de agradecimiento para mis Suscriptores',
      category: {
        id: 3,
        name: 'Astronomía',
        description: 'Usa esta categoría para temas relacionados con el espacio y astronomía',
      },
      type:'SUBS',
      tags_id: [1],
      publicationDate: new Date('2020-07-21'),
      summary: 'Gracias a todos mis suscriptores',
      comments: []
    },
  ];
  private articleDetail: ArticleDetail[] = [
    {
      id: 1,
      content: "El cambio climático ha alterado los patrones de precipitación a nivel mundial, generando variaciones en frecuencia, intensidad y distribución de las lluvias. Este fenómeno es notable en regiones tropicales, donde las lluvias han aumentado, mientras que áreas semiáridas experimentan sequías prolongadas. Estas modificaciones se deben al calentamiento global, que intensifica el ciclo hidrológico, aumentando la evaporación en zonas cálidas y, en consecuencia, intensificando las lluvias en otras áreas. Este artículo analiza los modelos climáticos actuales y sugiere estrategias de adaptación y mitigación para enfrentar estos cambios y proteger la seguridad hídrica global.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 2,
      content: "La migración animal es un proceso natural crucial para la supervivencia de muchas especies, pero en los últimos años, los cambios climáticos han alterado estos patrones, afectando el hábitat y los recursos necesarios para su viaje. Especies como los caribúes y aves migratorias han modificado sus rutas y tiempos de migración en respuesta a la pérdida de hábitat, variación en las estaciones y temperaturas extremas. Este artículo explora casos específicos y discute la urgencia de preservar corredores migratorios naturales y ecosistemas claves para evitar la interrupción de estos patrones vitales.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 3,
      content: "Las plantas del desierto enfrentan condiciones extremas que incluyen temperaturas elevadas y escasez de agua. Para sobrevivir, han desarrollado adaptaciones fascinantes, como hojas pequeñas, cutículas gruesas y almacenamiento de agua en tejidos. Este artículo analiza especies como los cactus y su capacidad para realizar fotosíntesis en condiciones áridas, además de destacar su importancia en el equilibrio ecológico del desierto. La evolución de la flora desértica es un testimonio de la resiliencia de la naturaleza en los entornos más hostiles del planeta.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 4,
      content: "Los bosques tropicales son el hogar de una diversidad impresionante de orquídeas, con miles de especies que juegan roles fundamentales en el ecosistema, como polinizadoras y reguladoras de humedad. Este artículo explora las adaptaciones de las orquídeas tropicales, su simbiosis con hongos para la germinación y su relación con polinizadores específicos. También se analiza cómo la deforestación amenaza esta diversidad y la necesidad de políticas de conservación que preserven estos frágiles ecosistemas.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 5,
      content: "El deshielo acelerado de los glaciares está contribuyendo al aumento del nivel del mar, poniendo en riesgo comunidades costeras y hábitats marinos. La pérdida de estas masas de hielo es impulsada principalmente por el calentamiento global y tiene consecuencias a largo plazo, incluyendo la erosión de playas y la salinización de aguas subterráneas. Este artículo analiza los datos actuales sobre el derretimiento de glaciares y discute medidas que podrían ayudar a mitigar estos efectos, como reducir las emisiones de gases de efecto invernadero.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 6,
      content: "El cambio climático está aumentando la frecuencia e intensidad de fenómenos meteorológicos extremos como tormentas y huracanes. Con temperaturas oceánicas más cálidas, estos eventos adquieren más energía, lo que lleva a precipitaciones intensas y vientos más destructivos. Este artículo profundiza en las investigaciones recientes sobre cómo el cambio climático afecta a estos fenómenos y sugiere mejoras en los sistemas de alerta y estrategias de preparación para minimizar su impacto en áreas vulnerables.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 7,
      content: "Los animales nocturnos del desierto han desarrollado adaptaciones extraordinarias para sobrevivir en un ambiente hostil. Al ser activos principalmente de noche, estos animales evitan las altas temperaturas diurnas. Además, muchas especies poseen sentidos altamente desarrollados, como visión y oído agudo. Este artículo describe las estrategias de caza, adaptación a la escasez de agua y comportamiento nocturno que permiten a estos animales prosperar en uno de los entornos más extremos del planeta.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 8,
      content: "Las ballenas realizan algunas de las migraciones más largas del reino animal, viajando miles de kilómetros en busca de alimento y áreas de cría. Sin embargo, sus rutas migratorias se ven amenazadas por el cambio climático y la actividad humana, como el tráfico marítimo y la pesca. Este artículo examina los patrones migratorios de diferentes especies de ballenas y explora las amenazas que enfrentan, además de proponer soluciones para proteger estos impresionantes mamíferos marinos.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 9,
      content: "Las tortugas han habitado la Tierra durante más de 200 millones de años, evolucionando en una variedad de hábitats, desde mares hasta desiertos. Este artículo recorre la historia evolutiva de las tortugas, destacando sus adaptaciones para la supervivencia, como caparazones protectores y sistemas de metabolismo lento. También se discuten los desafíos modernos que enfrentan, incluidos la pérdida de hábitat y el cambio climático, y los esfuerzos de conservación para asegurar su supervivencia futura.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 10,
      content: "El océano alberga una biodiversidad increíble y es fundamental para la salud del planeta, regulando el clima y proporcionando hábitat a millones de especies. Este artículo explora las maravillas del océano, desde los arrecifes de coral hasta las profundidades abisales, y destaca la importancia de la conservación marina. También aborda las amenazas que enfrentan los ecosistemas oceánicos, como la contaminación plástica y el calentamiento global, y la necesidad urgente de proteger estos ecosistemas vitales.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id: 11,
      content: "La astronomía es una ciencia fascinante que nos permite explorar el universo y comprender fenómenos como las estrellas, planetas y galaxias. Este artículo introduce los conceptos básicos de la astronomía, desde la estructura del sistema solar hasta las herramientas modernas para estudiar el cosmos. Además, ofrece una perspectiva sobre cómo los avances en astronomía han expandido nuestro conocimiento sobre el origen del universo y nuestro lugar en él, inspirando a nuevas generaciones de científicos y exploradores del espacio.",
      image: ["assets/article_placeholder.png"]
    },
    {
      id:12,
      content:'HOLA A TODOS MIS SUSCRIPTORES',
      image:["assets/article_placeholder.png"]
    },
  ]
  constructor() {}

  private nextId = this.article.length + 1;
  
  addArticleDetail(articleDetail: ArticleDetail): ArticleDetail {
    
    this.articleDetail.push(articleDetail);
    return articleDetail;
  }
  deleteArticleDetail(id: number): boolean {
    const index = this.articleDetail.findIndex(a => a.id === id);
    if (index !== -1) {
      this.articleDetail.splice(index, 1);
      return true;
    }
    return false;
  }
  getArticleDetailById(id:number){
    return this.articleDetail.find(a => a.id === id) ?? null;
  }
  addArticle(article: Article,articleDetail:ArticleDetail): Article {
    article.id = this.nextId++;
    articleDetail.id=article.id;
    this.article.push(article);
    this.articleDetail.push(articleDetail);
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