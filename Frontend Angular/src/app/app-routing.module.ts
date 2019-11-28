import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaFormComponent } from './components/persona-form/persona-form.component'
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'personas',
    component: PersonaListComponent
  },
  {
    path: 'productos',
    component: ProductoListComponent
  },
  {
    path: 'personas/add',
    component: PersonaFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
