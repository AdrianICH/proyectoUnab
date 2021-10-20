import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichasTecnicasComponent } from './func_pol/fichas-tecnicas/fichas-tecnicas.component';
import { MenuPrincipalComponent } from './fichasTecnicas/menu-principal/menu-principal.component';
import { RegistrarFichasComponent } from './fichasTecnicas/registrar-fichas/registrar-fichas.component';
import { ActualizarFichasComponent } from './fichasTecnicas/actualizar-fichas/actualizar-fichas.component';
import { EliminarFichasComponent } from './fichasTecnicas/eliminar-fichas/eliminar-fichas.component';
import { FiltrarFichasComponent } from './fichasTecnicas/filtrar-fichas/filtrar-fichas.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FichasTecnicasComponent,
    MenuPrincipalComponent,
    RegistrarFichasComponent,
    ActualizarFichasComponent,
    EliminarFichasComponent,
    FiltrarFichasComponent
  ],
  imports: [
    //NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
