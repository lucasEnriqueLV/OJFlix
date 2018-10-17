import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './modules/material.module';
import { AppRoutingModule } from './modules/app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './authentication-guard.service'
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopoComponent,
    HomeComponent,
    FooterComponent,
    PerfilComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
