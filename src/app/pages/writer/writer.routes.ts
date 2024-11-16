import { Routes } from '@angular/router'
import { WriterLayoutComponent } from './writer-layout/writer-layout.component'
import { ArticleListComponent } from './article-list/article-list.component'
import { ArticleFormComponent } from './article-form/article-form.component'
import { CategoryListComponent } from './category-list/category-list.component'
import { CategoryFormComponent } from './category-form/category-form.component'
import { HomepageComponent } from './homepage/homepage.component'
import { ArticleCatalogComponent } from '../../shared/components/article-catalog/article-catalog.component'
import { ArticleDetailComponent } from '../../shared/components/article-detail/article-detail.component'
import { SaveCatalogComponent } from '../../shared/components/save-catalog/save-catalog.component'


export const writerRoutes: Routes=[
    {
        path:'',
        component:WriterLayoutComponent,
        children:[
            {path:'homepage',component:HomepageComponent},
            {path:'catalog',component:ArticleCatalogComponent},
            {path:'catalog/article/details/:id', component:ArticleDetailComponent},
            
            {path:'articles/add', component:ArticleFormComponent},
            {path:'articles/edit/:id', component:ArticleFormComponent},
            
            {path:'categories', component:CategoryListComponent},
            {path:'categproes/add', component:CategoryFormComponent},
            {path:'categories/edit/:id', component:CategoryFormComponent},

            {path:'saved',component:SaveCatalogComponent},

            
        ]
    }
]