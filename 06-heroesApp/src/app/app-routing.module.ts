import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate, mapToCanMatch } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule),
    canActivate: mapToCanActivate([PublicGuard]),
    canMatch: mapToCanMatch([PublicGuard]),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(module => module.HeroesModule),
    canActivate: mapToCanActivate([AuthGuard]),
    canMatch: mapToCanMatch([AuthGuard]),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
