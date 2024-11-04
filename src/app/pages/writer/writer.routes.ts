import { Routes } from '@angular/router'
import { WriterLayoutComponent } from './writer-layout/writer-layout.component'
import { ArticleListComponent } from './article-list/article-list.component'
import { ArticleFormComponent } from './article-form/article-form.component'
import { CategoryListComponent } from './category-list/category-list.component'
import { CategoryFormComponent } from './category-form/category-form.component'

export const writerRoutes: Routes=[
    {
        path:'',
        component:WriterLayoutComponent,
        children:[
            {path:'articles',component:ArticleListComponent},
            {path:'articles/add', component:ArticleFormComponent},
            {path:'articles/edit/:id', component:ArticleFormComponent},
            {path:'categories', component:CategoryListComponent},
            {path:'categproes/add', component:CategoryFormComponent},
            {path:'categories/edit/:id', component:CategoryFormComponent}
        ]
    }
]