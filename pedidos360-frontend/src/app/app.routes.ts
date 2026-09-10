import { Routes } from '@angular/router';
import { Registro } from './components/register/register';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'register', component: Registro},
    {path: 'login', component: Login},
    {path: '**', redirectTo: 'login'}
];
