import { Routes } from '@angular/router';
import { ReaderLayoutComponent } from './reader-layout/reader-layout.component';
import { HomepageComponent } from './homepage/homepage.component'
import { ArticleCatalogComponent } from './article-catalog/article-catalog.component';


export const readerRoutes: Routes = [
    {
        path:'',
        component:ReaderLayoutComponent,
        children:[
            {path:'homepage',component:HomepageComponent},
            {path:'catalog',component:ArticleCatalogComponent}
        ]
    }
];
