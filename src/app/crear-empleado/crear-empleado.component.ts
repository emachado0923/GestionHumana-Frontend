import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  checked:boolean=false;

  constructor() { }

  crearHijos(){
    this.checked=!false;
    return this.checked;
  }

  ngOnInit(): void {
  }

}
