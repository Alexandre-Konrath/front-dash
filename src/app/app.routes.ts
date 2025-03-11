import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login-page.component').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home-page.component').then(m => m.HomePage),
    data: { preload: true }
  }
];
