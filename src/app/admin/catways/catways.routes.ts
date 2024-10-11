import { Routes } from '@angular/router';
import { CAddComponent } from './c-add/c-add.component';
import { CDeleteComponent } from './c-delete/c-delete.component';
import { CEditComponent } from './c-edit/c-edit.component';
import { CIndexComponent } from './c-index/c-index.component';

export const catwaysRoutes: Routes = [

    {path: '', component: CIndexComponent},
    {path: 'edit/:id', component: CEditComponent},
    {path:'add', component: CAddComponent},
    {path:'delete/:id', component: CDeleteComponent}
];