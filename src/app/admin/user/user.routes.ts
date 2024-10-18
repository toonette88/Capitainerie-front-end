import { Routes } from '@angular/router';
import { UIndexComponent } from './u-index/u-index.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { UAddComponent } from './u-add/u-add.component';
import { UDeleteComponent } from './u-delete/u-delete.component';

export const userRoutes: Routes = [
    
    {path: '', component: UIndexComponent},
    {path: 'edit/:id', component: UEditComponent},
    {path:'add', component: UAddComponent},
    {path:'delete/:id', component: UDeleteComponent}
]