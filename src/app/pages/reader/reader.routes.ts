import { Routes } from '@angular/router';
import { ReaderLayoutComponent } from './reader-layout/reader-layout.component';
import { ArticleReadComponent } from './article-read/article-read.component';

export const readerRoutes: Routes = [
    {
        path:'',
        component:ReaderLayoutComponent,
        children:[
            {path:'read',component:ArticleReadComponent}
        ]
    }
];
