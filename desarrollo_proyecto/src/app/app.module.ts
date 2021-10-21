import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultCmpnntComponent } from './componente_ejemplo/default-cmpnnt/default-cmpnnt.component';
import { RegistrarUsuariosComponent } from './funci_johann/registrar-usuarios/registrar-usuarios.component';

import { GestionInventariosJulianaComponent } from './gestion-inventarios-juliana/gestion-inventarios-juliana.component';
import { GestionPermisosCarlosComponent } from './gestion-permisos-carlos/gestion-permisos-carlos.component';
import { GestionUsuarioNathaliaComponent } from './gestion-usuario-nathalia/gestion-usuario-nathalia.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './funci_johann/pagina-principal/pagina-principal.component';
import { NavbarMenuComponent } from './funci_johann/navbar-menu/navbar-menu.component';
import { LoginComponent } from './gestion-usuario-nathalia/login/login.component';
import { InventarioComponent } from './gestion-inventarios-juliana/inventario/inventario.component';
import { LoginCPComponent } from './gestion-permisos-carlos/login-cp/login-cp.component';
import { SPUserMenuComponent } from './gestion-permisos-carlos/spuser-menu/spuser-menu.component';
import { VerificarCorreoComponent } from './gestion-permisos-carlos/verificar-correo/verificar-correo.component';
import { ConcederPermisosComponent } from './gestion-permisos-carlos/conceder-permisos/conceder-permisos.component';
import { MenuUsuarioComponent } from './gestion-usuario-nathalia/menu-usuario/menu-usuario.component';
import { MenuPrincipalComponent } from './gestion-fichas-tec-pol-david/menu-principal/menu-principal.component';
import { RegistrarFichasComponent } from './gestion-fichas-tec-pol-david/registrar-fichas/registrar-fichas.component';
import { FiltrarFichasComponent } from './gestion-fichas-tec-pol-david/filtrar-fichas/filtrar-fichas.component';
import { EliminarFichasComponent } from './gestion-fichas-tec-pol-david/eliminar-fichas/eliminar-fichas.component';
import { ActualizarFichasComponent } from './gestion-fichas-tec-pol-david/actualizar-fichas/actualizar-fichas.component';


//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DefaultCmpnntComponent,
    RegistrarUsuariosComponent,
    GestionInventariosJulianaComponent,
    GestionPermisosCarlosComponent,
    GestionUsuarioNathaliaComponent,
    PaginaPrincipalComponent,
    NavbarMenuComponent,
    LoginComponent,
    InventarioComponent,
    LoginCPComponent,
    SPUserMenuComponent,
    VerificarCorreoComponent,
    ConcederPermisosComponent,
    MenuUsuarioComponent,
    MenuPrincipalComponent,
    RegistrarFichasComponent,
    FiltrarFichasComponent,
    EliminarFichasComponent,
    ActualizarFichasComponent,
  ],
  imports: [
    //[ NgbModule.forRoot()],  
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
