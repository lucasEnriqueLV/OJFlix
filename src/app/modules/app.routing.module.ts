import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { AuthenticationGuard } from '../authentication-guard.service'

const routes: Routes = [
  { path: 'home', component: HomeComponent ,
    canActivate: [ AuthenticationGuard ],
    children: [
      { path: '', component: UsuariosComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'login', component: LoginComponent}
    ]},
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }