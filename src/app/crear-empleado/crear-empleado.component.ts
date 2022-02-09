import { Component, OnInit } from '@angular/core';
import { CrearEmpleados } from '../interfaces/crear-empleado';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  checked:boolean=false;

  demografico: CrearEmpleadoComponent = {

    nombre: '',
    apellidos: '',
    cedula:  '',
    correoPersonal: '',
    genero: '',
    fechaNacimiento: '',
    lugarNacimiento: '',
    direccion: '',
    municipio: '',
    barrio: '',
    estrato: '',
    telefono: '',
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

  submitEmpleado(){}

  ngOnInit(): void {
  }

}
