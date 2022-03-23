import { Injectable } from '@angular/core';
import { Cliente } from './clientes/model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes:Array<Cliente> =[
    {nombre:'saul',dni:'1231234',domicilio:'lima'},
    {nombre:'carlos',dni:'3443',domicilio:'chiclayo'},
    {nombre:'miguel',dni:'12314343234',domicilio:'sjdl'},
  ]
  constructor() { }
  getCliente():Array <Cliente>{
    return this.clientes;
  }
  setCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }
}
