import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
;


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { EmpleadoListComponent } from './empleado/empleado-list/empleado-list.component';
import { EmpleadoModule } from './empleado/empleado.module';
import { AdministrativasComponent } from './administativas/administrativas/administrativas.component';
import { EmpleabilidadComponent } from './empleabilidad/empleabilidad/empleabilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpleadoListComponent,
    AdministrativasComponent,
    EmpleabilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpleadoModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
