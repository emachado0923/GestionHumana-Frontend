import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpleadoListComponent} from './empleado/empleado-list/empleado-list.component'
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'empleado',
    component: EmpleadoListComponent
  },

  {
    path: 'crear-empleado',
    component: CrearEmpleadoComponent
  },

  {
    path: 'editar-empleado/:id',
    component: CrearEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
