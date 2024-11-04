import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'writer', loadChildren: () => import('./pages/writer/writer.routes').then(m=>m.writerRoutes),},
    {path:'reader', loadChildren: () => import('./pages/reader/reader.routes').then(m=>m.readerRoutes),},
    {path:'auth', loadChildren: () => import('./pages/auth/auth.routes').then(m=>m.authRoutes),},
    {path:'**',redirectTo:''}
];
