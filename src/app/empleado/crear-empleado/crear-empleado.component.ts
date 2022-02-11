import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { EmpleadoService } from '../service/empleado.service';
import {Empleado} from '../interfaces/empleado.interface'
import {Router} from '@angular/router';
=======
>>>>>>> b5f09b4aed64971ba787334f294ffdd6577b378d

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }
>>>>>>> b5f09b4aed64971ba787334f294ffdd6577b378d

  ngOnInit(): void {
  }

<<<<<<< HEAD
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



=======
>>>>>>> b5f09b4aed64971ba787334f294ffdd6577b378d
}
