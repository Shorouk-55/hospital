import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/auth/login/login';
import { Signup } from './features/auth/signup/signup';
import { Notfound } from './shared/components/notfound/notfound';
import { NormalMode } from './features/normal-mode/normal-mode';
import { Emergency } from './features/emergency/emergency';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'signup',
        component: Signup
    },
    {
        path: 'home',
        component: Home
    },

    {
        path: 'normalmode',
        component: NormalMode
    },
    {
        path: 'emergency',
        component: Emergency
    },

    {
        path: '**',
        component: Notfound
    }
];
