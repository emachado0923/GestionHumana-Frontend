import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { CrearEmpleados } from '../interfaces/crear-empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearEmpleadoService {

  BASE_URL:string ='http://localhost:3000/demografico';

  constructor(private http: HttpClient) { }


  getEmpleado() {}
  createEmpleado(crear: CrearEmpleados): Observable<CrearEmpleados>{
    return this.http.post<CrearEmpleados>(`${this.BASE_URL}/demografico`, crear);
  }
  
  deleteEmpleado(){}
  updateEmpleado(){}

}
