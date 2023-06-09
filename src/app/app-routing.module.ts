import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/Sesion/login/login.component';
import { RegistroComponent } from './Views/Sesion/registro/registro.component';
import { MenuComponent } from './Views/Estructura/menu/menu.component';
import { PerfilComponent } from './Views/Usuario/perfil/perfil.component';
import { DashboardComponent } from './Views/Dashboard/dashboard/dashboard.component';
import { ReclamoComponent } from './Views/Reclamo/reclamo/reclamo.component';
import { HistorialComponent } from './Views/Reclamo/historial/historial.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  /*estando en el meu luego de iniciar sesion  */
  {
    path: 'menu/:id', component: MenuComponent,
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'reclamo', component: ReclamoComponent },
      { path: 'historial', component: HistorialComponent },
      { path: 'mapa', component: HistorialComponent },
    ]
  },

  {path: 'menu/:id/historial', component: MenuComponent,
    children: [
      { path: 'reclamo/:id', component: ReclamoComponent }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
