import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../service/empleado.service';
import {Empleado} from '../interfaces/empleado.interface'
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  empleados:Empleado[]=[];

  public empleado:any;

  constructor(private empleadoService:EmpleadoService,private router:Router) {
    this.empleado={
      nombres:'',
      apellidos:'',
      correoElectronico:'',
      cedula:'',
      genero:'',
      fechaNacimiento:'',
      lugarNacimiento:'',
      direccion:'',
      municipio:'',
      barrio:'',
      estrato:'',
      telefono:'',
      tipoVivienda:'',
      estadoCivil:'',
      nivelFormacion:'',
      tituloObtenido:'',
      nombreconyugue:'',
      tieneHijos:'',
      condicionEspecial:'',
      especifico:''

    } 
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.empleadoService.crearEmpleado(this.empleado)
    .subscribe(
      res=>{
        this.empleado=res;
      },
      err=>{console.log(err);
      console.log(this.empleado);
      });
  }



}
