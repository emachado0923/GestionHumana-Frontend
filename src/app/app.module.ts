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
<<<<<<< HEAD
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { AdministrativasComponent } from './administativas/administrativas/administrativas.component';
import { EmpleabilidadComponent } from './empleabilidad/empleabilidad/empleabilidad.component';
>>>>>>> b5f09b4aed64971ba787334f294ffdd6577b378d

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpleadoListComponent,
<<<<<<< HEAD
    CrearEmpleadoComponent
=======
    AdministrativasComponent,
    EmpleabilidadComponent
>>>>>>> b5f09b4aed64971ba787334f294ffdd6577b378d
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
