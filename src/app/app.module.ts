import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { EmpleadoListComponent } from './empleado/empleado-list/empleado-list.component';
import { EmpleadoModule } from './empleado/empleado.module';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpleadoListComponent,
    CrearEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpleadoModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
