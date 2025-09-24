import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Error } from './pages/error/error';
import { FrontPage } from './pages/front-page/front-page';
import { loginGuard } from './guards/login-guard';
import { authGuard } from './guards/auth-guard';
import { CreateAccount } from './pages/create-account/create-account';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'page', component: FrontPage, canActivate: [authGuard]  },
  { path: 'registrar', component: CreateAccount, canActivate: [loginGuard] },
  { path: 'login', component: Login, canActivate: [loginGuard] },
  { path: '**', component: Error }         
];

