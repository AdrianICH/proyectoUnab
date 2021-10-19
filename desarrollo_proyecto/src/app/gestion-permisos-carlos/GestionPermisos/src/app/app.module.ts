import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConcederPermisos } from './ConcederPermisos/ConcederPermisos.component';
import { Login } from './Login/Login.component';
import { MenuSuperUsuarios } from './menuSuperUsuario/menuSuperUsuario.component';
import { VerificarCorreo } from './VerificarCorreo/VerificarCorreo.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, MenuSuperUsuarios, Login, 
    VerificarCorreo, ConcederPermisos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
