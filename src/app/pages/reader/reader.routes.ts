import { Routes } from '@angular/router';
import { ReaderLayoutComponent } from './reader-layout/reader-layout.component';
import { HomepageComponent } from './homepage/homepage.component'
import { ArticleCatalogComponent } from '../../shared/components/article-catalog/article-catalog.component';
import { ArticleDetailComponent } from '../../shared/components/article-detail/article-detail.component';
import { SaveCatalogComponent } from '../../shared/components/save-catalog/save-catalog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FollowedListComponent } from './followed-list/followed-list.component';
import {PollComponent} from './poll/poll.component';
import { ProfileComponent } from '../../shared/components/profile/profile.component';
import { SubscriptionsComponent } from '../../shared/components/subscriptions/subscriptions.component';


export const readerRoutes: Routes = [
    {
        path:'',
        component:ReaderLayoutComponent,
        children:[
            {path:'homepage',component:HomepageComponent},
            {path:'catalog',component:ArticleCatalogComponent},
            {path:'catalog/article/details/:id', component:ArticleDetailComponent},
            {path:'saved',component:SaveCatalogComponent},
            {path: 'followed', component:FollowedListComponent},
            {path: 'notifications', component: PollComponent},
            {path:'user-profile', component: UserProfileComponent },
            {path:'profile/:id',component:ProfileComponent},
            {path:'subscriptions',component:SubscriptionsComponent},
        ]
    }
];
