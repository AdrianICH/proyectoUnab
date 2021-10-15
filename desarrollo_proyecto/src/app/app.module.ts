import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultCmpnntComponent } from './componente_ejemplo/default-cmpnnt/default-cmpnnt.component';
import { RegistrarUsuariosComponent } from './funci_johann/registrar-usuarios/registrar-usuarios.component';
import { GestionFichasTecPolDavidComponent } from './gestion-fichas-tec-pol-david/gestion-fichas-tec-pol-david.component';
import { GestionInventariosJulianaComponent } from './gestion-inventarios-juliana/gestion-inventarios-juliana.component';
import { GestionPermisosCarlosComponent } from './gestion-permisos-carlos/gestion-permisos-carlos.component';
import { GestionUsuarioNathaliaComponent } from './gestion-usuario-nathalia/gestion-usuario-nathalia.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './funci_johann/pagina-principal/pagina-principal.component';


//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DefaultCmpnntComponent,
    RegistrarUsuariosComponent,
    GestionFichasTecPolDavidComponent,
    GestionInventariosJulianaComponent,
    GestionPermisosCarlosComponent,
    GestionUsuarioNathaliaComponent,
    PaginaPrincipalComponent,
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
