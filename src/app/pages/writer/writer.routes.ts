import { Routes } from '@angular/router'
import { WriterLayoutComponent } from './writer-layout/writer-layout.component'

import { ArticleFormComponent } from './article-form/article-form.component'
import { HomepageComponent } from './homepage/homepage.component'
import { ArticleCatalogComponent } from '../../shared/components/article-catalog/article-catalog.component'
import { ArticleDetailComponent } from '../../shared/components/article-detail/article-detail.component'
import { SaveCatalogComponent } from '../../shared/components/save-catalog/save-catalog.component'
import { RevenueComponent } from './revenue/revenue.component'
import { NotificationsComponent } from './notifications/notifications.component'
import { ProfileComponent } from '../../shared/components/profile/profile.component'
import { SubscriptionsComponent } from '../../shared/components/subscriptions/subscriptions.component'



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

            {path:'saved',component:SaveCatalogComponent},
            {path:'revenue',component:RevenueComponent},

            {path:'notifications',component:NotificationsComponent},
            {path:'subscriptions',component:SubscriptionsComponent},

            
            {path:'profile/:id',component:ProfileComponent},
            
        ]
    }
]
