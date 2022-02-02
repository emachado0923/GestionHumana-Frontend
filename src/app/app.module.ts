import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
;


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpleadoListComponent } from './empleado/empleado-list/empleado-list.component';
import { EmpleadoModule } from './empleado/empleado.module';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { LoginComponent } from './login/login.component';
import { HijosComponent } from './hijos/hijos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpleadoListComponent,
    CrearEmpleadoComponent,
    LoginComponent,
    HijosComponent,
    
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
