import { Component, OnInit } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';
import { EmpleadoService } from '../service/empleado.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})

export class EmpleadoListComponent implements OnInit {

   public emple:Empleado[]=[];
  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.getAllEmpleados()
    .subscribe(resp=>{
      console.log(resp['data'])
      // console.log(resp['data']);
      this.emple=resp['data'];
      return this.emple;
    })
  }

}
