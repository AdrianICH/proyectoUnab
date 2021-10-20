import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './funci_johann/pagina-principal/pagina-principal.component';
import { RegistrarUsuariosComponent } from './funci_johann/registrar-usuarios/registrar-usuarios.component';
import { LoginComponent } from './gestion-usuario-nathalia/login/login.component';
import { GestionInventariosJulianaComponent } from './gestion-inventarios-juliana/gestion-inventarios-juliana.component';
import { InventarioComponent } from './gestion-inventarios-juliana/inventario/inventario.component';
import { LoginCPComponent } from './gestion-permisos-carlos/login-cp/login-cp.component';
import { SPUserMenuComponent } from './gestion-permisos-carlos/spuser-menu/spuser-menu.component';
import { VerificarCorreoComponent } from './gestion-permisos-carlos/verificar-correo/verificar-correo.component';
import { ConcederPermisosComponent } from './gestion-permisos-carlos/conceder-permisos/conceder-permisos.component';
const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent},
  { path: 'registrar', component: RegistrarUsuariosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'gestionInv', component: GestionInventariosJulianaComponent},
  { path: 'gestionarInv/inventario', component: InventarioComponent},
  { path: 'permisosUs', component: LoginCPComponent},
  { path: 'spuser', component: SPUserMenuComponent},
  { path: 'spuser/verificar', component: VerificarCorreoComponent},
  { path: 'spuser/conceder', component: ConcederPermisosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
