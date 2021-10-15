import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './funci_johann/pagina-principal/pagina-principal.component';
import { RegistrarUsuariosComponent } from './funci_johann/registrar-usuarios/registrar-usuarios.component';
const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent},
  { path: 'registrar', component: RegistrarUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
