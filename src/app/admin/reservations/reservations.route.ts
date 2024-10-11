import { Routes } from '@angular/router';
import { RAddComponent } from './r-add/r-add.component';
import { RDeleteComponent } from './r-delete/r-delete.component';
import { REditComponent } from './r-edit/r-edit.component';
import { RIndexComponent } from './r-index/r-index.component';


export const reservationsRoutes: Routes = [

    {path: '', component: RIndexComponent},
    {path: 'edit/:id', component: REditComponent},
    {path:'add', component: RAddComponent},
    {path:'delete/:id', component: RDeleteComponent}
];