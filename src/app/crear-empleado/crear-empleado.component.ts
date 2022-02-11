import { Component, OnInit } from '@angular/core';
import { CrearEmpleados } from '../interfaces/crear-empleado';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  checked:boolean=false;
  submitted:boolean = false;

  demografico: CrearEmpleados = {

    nombre: '',
    apellidos: '',
    cedula:  0,
    correoPersonal: '',
    genero: '',
    fechaNacimiento: 0,
    lugarNacimiento: '',
    direccion: '',
    municipio: '',
    barrio: '',
    estrato: 0,
    telefono: 0,
    tipoVivienda: '',
    estadoCivil: '',
    nivelFormacion: '',
    tituloObtenido: '',
    nombreConyuge: '',
    condicionEspecial: '',
    especifique: ''
  };

  constructor() { }

  crearHijos(){
    this.checked=!false;
    return this.checked;
  }

  agregarEmpleado(){
    console.log(this.agregarEmpleado)
    
  }

  ngOnInit(): void {
  }

  

}
