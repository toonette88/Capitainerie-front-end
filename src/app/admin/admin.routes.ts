import { Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { userRoutes } from './user/user.routes';
import { catwaysRoutes } from './catways/catways.routes';
import { reservationsRoutes } from './reservations/reservations.route';

export const adminRoutes: Routes = [
    {
        path: '', component: AlayoutComponent, children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {path: 'dashboard', component: DashboardComponent},
            {path: 'user', children: userRoutes},
            {path: 'catways', children: catwaysRoutes},
            {path: 'reservations', children: reservationsRoutes}
        ]
    },
    
]
