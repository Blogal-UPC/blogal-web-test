import {Category} from "./category.model";
import {Comment} from './comment.model';

export interface Article {
  id: number;
  author_id: number;
  author: string;
  title: string;
  category: Category;
  type:'FREE'|'SUBS'
  tags_id: number[];
  publicationDate: Date;
  summary: string;
  comments: Comment[];
}
