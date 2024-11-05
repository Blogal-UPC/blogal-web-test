import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'writer', loadChildren: () => import('./pages/writer/writer.routes').then(m=>m.writerRoutes),canActivate:[authGuard]},
    {path:'reader', loadChildren: () => import('./pages/reader/reader.routes').then(m=>m.readerRoutes),canActivate:[authGuard]},
    {path:'auth', loadChildren: () => import('./pages/auth/auth.routes').then(m=>m.authRoutes),},
    {path:'**',redirectTo:''}
];
