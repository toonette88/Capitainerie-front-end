import { Routes } from '@angular/router';
import { publicRoutes } from './public/public.routes';
import { adminRoutes } from './admin/admin.routes';
import { ErrorComponent } from './_utils/error/error.component';
import { authRoutes } from './auth/auth.routes';
import { AuthGuardFn } from './_helpers/authGuardFn';

export const routes: Routes = [
    {
        path: '',
        children: publicRoutes
    },
     {
        path: 'auth',
        children: authRoutes
    },
    {
        path: 'admin',
        children: adminRoutes,
        canActivate: [AuthGuardFn]
    },
    {
        path:'**',
        component: ErrorComponent
    }
];
