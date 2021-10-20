import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './fichasTecnicas/menu-principal/menu-principal.component';
import { RegistrarFichasComponent } from './fichasTecnicas/registrar-fichas/registrar-fichas.component';
import { ActualizarFichasComponent } from './fichasTecnicas/actualizar-fichas/actualizar-fichas.component';
import { EliminarFichasComponent } from './fichasTecnicas/eliminar-fichas/eliminar-fichas.component';
import { FiltrarFichasComponent } from './fichasTecnicas/filtrar-fichas/filtrar-fichas.component';

const routes: Routes = [
  {path: '', component: MenuPrincipalComponent},
  {path: 'registrar', component: RegistrarFichasComponent},
  {path: 'actualizar', component: ActualizarFichasComponent},
  {path: 'eliminar', component: EliminarFichasComponent},
  {path:'filtrar', component: FiltrarFichasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
