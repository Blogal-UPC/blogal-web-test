import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../core/services/article.services';
import { Tag } from '../../models/tag.model';
import { TagService } from '../../../core/services/tag.services';
import { ControlEvent } from '@angular/forms';


@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
  
  
})
export class ArticleDetailComponent {

  article: Article | null = null;
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);
  private tagService = inject(TagService);
  private router = inject(Router);
  private location = inject(Location);

  tags_list: Tag[]=[];

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
  getContent(id:number){
    const content=this.articleService.getArticleDetailById(id)
    if(content){
      return content.content;
    }
    else{ return 'No hay contenido'};
  }
  goBack(): void {
    this.location.back();
  }
}
