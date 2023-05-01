import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/Sesion/login/login.component';
import { RegistroComponent } from './Views/Sesion/registro/registro.component';
import { MenuComponent } from './Views/Estructura/menu/menu.component';
import { PerfilComponent } from './Views/Usuario/perfil/perfil.component';
import { DashboardComponent } from './Views/Dashboard/dashboard/dashboard.component';
import { ReclamoComponent } from './Views/Reclamo/reclamo/reclamo.component';
import { HistorialComponent } from './Views/Reclamo/historial/historial.component';
import { MapasComponent } from './Views/Mapas/mapas/mapas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Angular material */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    PerfilComponent,
    DashboardComponent,
    ReclamoComponent,
    HistorialComponent,
    MapasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
