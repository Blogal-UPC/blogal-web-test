import {User} from "./user.model";
import {Category} from "./category.model";
import {Tag} from "./tag.model";
export interface Article{
    id: number;
    id_author:number;
    author:string; 
    title:string;
    category: Category;
    tags: Tag;
    publicationDate: Date;
    summary:string;
}