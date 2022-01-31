import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { HijosEmpleadoComponent } from './hijos-empleado/hijos-empleado.component';



@NgModule({
  declarations: [
    CrearEmpleadoComponent,
    HijosEmpleadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpleadoModule { }
