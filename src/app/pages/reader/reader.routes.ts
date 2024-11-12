import {Routes} from '@angular/router';
import {ReaderLayoutComponent} from './reader-layout/reader-layout.component';
import {HomepageComponent} from './homepage/homepage.component'
import {ArticleCatalogComponent} from '../../shared/components/article-catalog/article-catalog.component';
import {ArticleDetailComponent} from '../../shared/components/article-detail/article-detail.component';
import {PollComponent} from './poll/poll.component';


export const readerRoutes: Routes = [
  {
    path: '',
    component: ReaderLayoutComponent,
    children: [
      {path: 'homepage', component: HomepageComponent},
      {path: 'catalog', component: ArticleCatalogComponent},
      {path: 'catalog/article/details/:id', component: ArticleDetailComponent},
      {path: 'notifications', component: PollComponent}
      //path seguidos
      //path guardados
      //path recomendaciones
      //path notificaciones
      //path configuracion
    ]
  }
];
