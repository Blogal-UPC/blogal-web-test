import {Component, Input} from '@angular/core';
import {ArticleService} from '../../../../core/services/article.services';
import {Comment} from '../../../models/comment.model';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {DatePipe, NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatLabel} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatCardModule,
    DatePipe,
    MatIcon,
    MatInput,
    MatButton,
    MatIconButton,
    NgForOf,
    MatLabel,
    MatGridListModule
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  @Input() articleId!: number;
  comments: Comment[] = [];
  commentForm: FormGroup;

  constructor(
    private articleService: ArticleService,
    private formBuilder: FormBuilder,
    private authService: AuthService) {
    this.commentForm = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    const article = this.articleService.getArticleById(this.articleId);
    this.comments = article ? article.comments : [];
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      const user = this.authService.getcurrentUser();
      if (user) {
        const newComment: any = {
          id: new Date().getTime(),
          author: `${user.firstName} ${user.lastName}`,
          date: new Date(),
          content: this.commentForm.value.content,
          likes: 0,
          dislikes: 0,
          likedBy: [],
          dislikedBy: []
        };
        this.articleService.addComment(this.articleId, newComment);
        this.loadComments();
        this.commentForm.reset();
      } else {
        console.log('No hay usuario autenticado');
      }
    }
  }

  incrementLikes(comment: Comment): void {
    const user = this.authService.getcurrentUser();
    if (!user) return;

    const userId = user.id;
    if (comment.likedBy.includes(userId)) {
      comment.likes--;
      comment.likedBy = comment.likedBy.filter(id => id !== userId);
    } else {
      if (comment.dislikedBy.includes(userId)) {
        comment.dislikes--;
        comment.dislikedBy = comment.dislikedBy.filter(id => id !== userId);
      }
      comment.likes++;
      comment.likedBy.push(userId);
    }
  }

  incrementDislikes(comment: Comment): void {
    const user = this.authService.getcurrentUser();
    if (!user) return;

    const userId = user.id;
    if (comment.dislikedBy.includes(userId)) {
      comment.dislikes--;
      comment.dislikedBy = comment.dislikedBy.filter(id => id !== userId);
    } else {
      if (comment.likedBy.includes(userId)) {
        comment.likes--;
        comment.likedBy = comment.likedBy.filter(id => id !== userId);
      }
      comment.dislikes++;
      comment.dislikedBy.push(userId);
    }
  }

  hasLiked(comment: Comment): boolean {
    const user = this.authService.getcurrentUser();
    return user ? comment.likedBy.includes(user.id) : false;
  }

  hasDisliked(comment: Comment): boolean {
    const user = this.authService.getcurrentUser();
    return user ? comment.dislikedBy.includes(user.id) : false;
  }
}
