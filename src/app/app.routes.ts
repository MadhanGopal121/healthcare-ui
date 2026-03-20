import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },

    {
    path: 'login',
    loadComponent: () =>
        import('./auth/login/login')
        .then(m => m.Login)
    },
    {
    path: 'register',
    loadComponent: () =>
        import('./auth/register/register')
        .then(m => m.Register)
    }
];
