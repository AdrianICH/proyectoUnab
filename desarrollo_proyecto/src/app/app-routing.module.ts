import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './funci_johann/pagina-principal/pagina-principal.component';
import { RegistrarUsuariosComponent } from './funci_johann/registrar-usuarios/registrar-usuarios.component';
import { LoginComponent } from './gestion-usuario-nathalia/login/login.component';
import { GestionInventariosJulianaComponent } from './gestion-inventarios-juliana/gestion-inventarios-juliana.component';
import { InventarioComponent } from './gestion-inventarios-juliana/inventario/inventario.component';
import { LoginCPComponent } from './gestion-permisos-carlos/login-cp/login-cp.component';
import { VerificarCorreoComponent } from './gestion-permisos-carlos/verificar-correo/verificar-correo.component';
import { ConcederPermisosComponent } from './gestion-permisos-carlos/conceder-permisos/conceder-permisos.component';
import { MenuUsuarioComponent } from './gestion-usuario-nathalia/menu-usuario/menu-usuario.component';
import { MenuPrincipalComponent } from './gestion-fichas-tec-pol-david/menu-principal/menu-principal.component';
import { RegistrarFichasComponent } from './gestion-fichas-tec-pol-david/registrar-fichas/registrar-fichas.component';
import { ActualizarFichasComponent } from './gestion-fichas-tec-pol-david/actualizar-fichas/actualizar-fichas.component';
import { EliminarFichasComponent } from './gestion-fichas-tec-pol-david/eliminar-fichas/eliminar-fichas.component';
import { FiltrarFichasComponent } from './gestion-fichas-tec-pol-david/filtrar-fichas/filtrar-fichas.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent},
  { path: 'registrarUs', component: RegistrarUsuariosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'gestionInv', component: GestionInventariosJulianaComponent},
  { path: 'gestionarInv/inventario', component: InventarioComponent},
  { path: 'permisosUs', component: LoginCPComponent},
  { path: 'menuUsuario', component: MenuUsuarioComponent},
  { path: 'menuUsuario/verificar', component: VerificarCorreoComponent},
  { path: 'spuser/conceder', component: ConcederPermisosComponent},
  { path: 'GestionarFichas', component: MenuPrincipalComponent},
  {path: 'GestionarFichas/registrar', component: RegistrarFichasComponent},
  {path: 'GestionarFichas/actualizar', component: ActualizarFichasComponent},
  {path: 'GestionarFichas/eliminar', component: EliminarFichasComponent},
  {path:'GestionarFichas/filtrar', component: FiltrarFichasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
