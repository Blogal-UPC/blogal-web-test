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
import {CommentsComponent} from './comments/comments.component';
import { ControlEvent, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ArticleDetail } from '../../models/article-detail.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../../core/services/auth.service';
import { RevenueService } from '../../../core/services/revenue.service';
import { Payment } from '../../models/payment.model';



@Component({
  selector: 'app-article-detail',
  standalone: true,

  imports: [CommonModule,MatButtonModule,MatInputModule,MatFormFieldModule,FormsModule,
    MatToolbarModule,MatIconModule,MatIconButton,MatCard,MatCardContent,CommentsComponent],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent {

  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);
  private tagService = inject(TagService);
  private location = inject(Location);
  private snackBar = inject(MatSnackBar);
  private authService=inject(AuthService);
  
  private revenueService=inject(RevenueService);

  private currentUser=this.authService.getcurrentUser();

  donationValue:number=0;
  article: Article | null = null;
  articleDetail:ArticleDetail|null=null;
  tags_list: Tag[]=[];

  private articleSaveService = inject(ArticleSaveService);
  

  ngOnInit(): void {
    const articleId = Number(this.route.snapshot.paramMap.get('id'));

    if (!articleId) {
      this.showSnackBar('No se encuentra el detalle del artículo')
      return;
    }
    this.article = this.articleService.getArticleById(articleId);
    if (!this.article) {
      this.showSnackBar('No se encuentra el detalle del artículo')
      return;
    }
    const tags = this.article?.tags_id
    tags?.forEach((tag) =>{
      this.tags_list.push(this.tagService.getTagById(tag)!);
    });
    this.articleDetail=this.articleService.getArticleDetailById(this.article.id);
  }


  addArticleSave(article: Article): void {
    const user = this.authService.getcurrentUser();
    if (!user) {
      this.showSnackBar('No hay usuario');
      return;
    }
    const articleSaves = this.articleSaveService.getArticleSaveByOwnerID(user.id);
    if (articleSaves?.article_id.includes(article.id)) {
      this.showSnackBar('Ya ha guardado el artículo');
      return;
    }
    this.articleSaveService.addArticleSave(user, article);
    this.showSnackBar('Artículo guardado para ver más tarde');
  }



  goBack(): void {
    this.location.back();
  }
  showSnackBar(message:string) {
    this.snackBar.open(message,'Cerrar',{
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  donate(){
    if(!this.currentUser){
      return;
    }
    if(!this.article){
      return;
    }
    if(this.donationValue<=0){
      this.showSnackBar('Ingrese un monto válido')
      return;
    }
    const payment : Payment={
      id:0,
      author_id:this.currentUser.id,
      receptor_id:this.article.author_id,
      type:'DONATION',
      amount:Number(this.donationValue),
      creationDate:new Date(),
    }
    this.revenueService.addPayment(payment);
    this.showSnackBar(`Se realizó una donación a ${this.article.author} por ${this.donationValue} soles`)
  }
  removeFrontZeros(){
    if(this.donationValue){
      this.donationValue=Number(this.donationValue);
    }
  }
  
}
