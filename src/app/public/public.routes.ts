import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { PlayoutComponent } from './playout/playout.component';

export const publicRoutes: Routes = [
    {
        path: '', component: PlayoutComponent, children: [

            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path : 'documentations', component: DocumentationComponent }
        ]
    },
];
