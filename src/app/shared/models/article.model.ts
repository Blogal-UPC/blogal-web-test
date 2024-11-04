import {User} from "./user.model";
import {Category} from "./category.model";
import {Tag} from "./tag.model";
export interface Article{
    id: number;
    title:string;
    author: User;
    category: Category;
    tags: Tag;
    publicationDate: Date;
}