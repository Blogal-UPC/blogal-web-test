import { Routes } from '@angular/router';
import { ReaderLayoutComponent } from './reader-layout/reader-layout.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { HomepageComponent } from './homepage/homepage.component'


export const readerRoutes: Routes = [
    {
        path:'',
        component:ReaderLayoutComponent,
        children:[
            {path:'homepage',component:HomepageComponent},
            {path:'read',component:ArticleReadComponent}
        ]
    }
];
