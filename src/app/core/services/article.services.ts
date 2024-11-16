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
        tags_id: [7, 17],
        publicationDate: new Date('2023-03-05'),
        summary: 'Un análisis de cómo el cambio climático afecta los patrones de precipitación a nivel mundial.',
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
    },
  ];
  private articleDetail: ArticleDetail[] = [
    {
      id: 1,
      content: "El cambio climático ha alterado los patrones de precipitación a nivel mundial, generando variaciones en frecuencia, intensidad y distribución de las lluvias. Este fenómeno es notable en regiones tropicales, donde las lluvias han aumentado, mientras que áreas semiáridas experimentan sequías prolongadas. Estas modificaciones se deben al calentamiento global, que intensifica el ciclo hidrológico, aumentando la evaporación en zonas cálidas y, en consecuencia, intensificando las lluvias en otras áreas. Este artículo analiza los modelos climáticos actuales y sugiere estrategias de adaptación y mitigación para enfrentar estos cambios y proteger la seguridad hídrica global.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 2,
      content: "La migración animal es un proceso natural crucial para la supervivencia de muchas especies, pero en los últimos años, los cambios climáticos han alterado estos patrones, afectando el hábitat y los recursos necesarios para su viaje. Especies como los caribúes y aves migratorias han modificado sus rutas y tiempos de migración en respuesta a la pérdida de hábitat, variación en las estaciones y temperaturas extremas. Este artículo explora casos específicos y discute la urgencia de preservar corredores migratorios naturales y ecosistemas claves para evitar la interrupción de estos patrones vitales.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 3,
      content: "Las plantas del desierto enfrentan condiciones extremas que incluyen temperaturas elevadas y escasez de agua. Para sobrevivir, han desarrollado adaptaciones fascinantes, como hojas pequeñas, cutículas gruesas y almacenamiento de agua en tejidos. Este artículo analiza especies como los cactus y su capacidad para realizar fotosíntesis en condiciones áridas, además de destacar su importancia en el equilibrio ecológico del desierto. La evolución de la flora desértica es un testimonio de la resiliencia de la naturaleza en los entornos más hostiles del planeta.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 4,
      content: "Los bosques tropicales son el hogar de una diversidad impresionante de orquídeas, con miles de especies que juegan roles fundamentales en el ecosistema, como polinizadoras y reguladoras de humedad. Este artículo explora las adaptaciones de las orquídeas tropicales, su simbiosis con hongos para la germinación y su relación con polinizadores específicos. También se analiza cómo la deforestación amenaza esta diversidad y la necesidad de políticas de conservación que preserven estos frágiles ecosistemas.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 5,
      content: "El deshielo acelerado de los glaciares está contribuyendo al aumento del nivel del mar, poniendo en riesgo comunidades costeras y hábitats marinos. La pérdida de estas masas de hielo es impulsada principalmente por el calentamiento global y tiene consecuencias a largo plazo, incluyendo la erosión de playas y la salinización de aguas subterráneas. Este artículo analiza los datos actuales sobre el derretimiento de glaciares y discute medidas que podrían ayudar a mitigar estos efectos, como reducir las emisiones de gases de efecto invernadero.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 6,
      content: "El cambio climático está aumentando la frecuencia e intensidad de fenómenos meteorológicos extremos como tormentas y huracanes. Con temperaturas oceánicas más cálidas, estos eventos adquieren más energía, lo que lleva a precipitaciones intensas y vientos más destructivos. Este artículo profundiza en las investigaciones recientes sobre cómo el cambio climático afecta a estos fenómenos y sugiere mejoras en los sistemas de alerta y estrategias de preparación para minimizar su impacto en áreas vulnerables.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 7,
      content: "Los animales nocturnos del desierto han desarrollado adaptaciones extraordinarias para sobrevivir en un ambiente hostil. Al ser activos principalmente de noche, estos animales evitan las altas temperaturas diurnas. Además, muchas especies poseen sentidos altamente desarrollados, como visión y oído agudo. Este artículo describe las estrategias de caza, adaptación a la escasez de agua y comportamiento nocturno que permiten a estos animales prosperar en uno de los entornos más extremos del planeta.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 8,
      content: "Las ballenas realizan algunas de las migraciones más largas del reino animal, viajando miles de kilómetros en busca de alimento y áreas de cría. Sin embargo, sus rutas migratorias se ven amenazadas por el cambio climático y la actividad humana, como el tráfico marítimo y la pesca. Este artículo examina los patrones migratorios de diferentes especies de ballenas y explora las amenazas que enfrentan, además de proponer soluciones para proteger estos impresionantes mamíferos marinos.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 9,
      content: "Las tortugas han habitado la Tierra durante más de 200 millones de años, evolucionando en una variedad de hábitats, desde mares hasta desiertos. Este artículo recorre la historia evolutiva de las tortugas, destacando sus adaptaciones para la supervivencia, como caparazones protectores y sistemas de metabolismo lento. También se discuten los desafíos modernos que enfrentan, incluidos la pérdida de hábitat y el cambio climático, y los esfuerzos de conservación para asegurar su supervivencia futura.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 10,
      content: "El océano alberga una biodiversidad increíble y es fundamental para la salud del planeta, regulando el clima y proporcionando hábitat a millones de especies. Este artículo explora las maravillas del océano, desde los arrecifes de coral hasta las profundidades abisales, y destaca la importancia de la conservación marina. También aborda las amenazas que enfrentan los ecosistemas oceánicos, como la contaminación plástica y el calentamiento global, y la necesidad urgente de proteger estos ecosistemas vitales.",
      image: ["assets/article_placeholder.jpg"]
    },
    {
      id: 11,
      content: "La astronomía es una ciencia fascinante que nos permite explorar el universo y comprender fenómenos como las estrellas, planetas y galaxias. Este artículo introduce los conceptos básicos de la astronomía, desde la estructura del sistema solar hasta las herramientas modernas para estudiar el cosmos. Además, ofrece una perspectiva sobre cómo los avances en astronomía han expandido nuestro conocimiento sobre el origen del universo y nuestro lugar en él, inspirando a nuevas generaciones de científicos y exploradores del espacio.",
      image: ["assets/article_placeholder.jpg"]
    }
  ]
  constructor() {}

  private nextId = this.article.length + 1;
  
  addArticleDetail(articleDetail: ArticleDetail): ArticleDetail {
    articleDetail.id = this.nextId++;
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