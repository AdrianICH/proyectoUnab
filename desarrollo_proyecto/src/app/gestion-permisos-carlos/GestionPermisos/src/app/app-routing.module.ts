import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperUsuarios } from './menuSuperUsuario/menuSuperUsuario.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Login } from './Login/Login.component';
import { VerificarCorreo } from './VerificarCorreo/VerificarCorreo.component';
import { ConcederPermisos } from './ConcederPermisos/ConcederPermisos.component';


const routes: Routes = [

  {path: 'menuSuperUsuario', component:MenuSuperUsuarios},
  {path: '', component:Login},
  {path: 'VerificarCorreo', component:VerificarCorreo},
  {path: 'ConcederPermisos', component:ConcederPermisos},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
