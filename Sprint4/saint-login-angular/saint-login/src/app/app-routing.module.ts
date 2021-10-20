import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menuUsuario', component: MenuUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
