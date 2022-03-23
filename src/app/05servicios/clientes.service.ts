import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes:any=[
    {nombre:'saul',dni:'1231234',domicilio:'lima'},
    {nombre:'carlos',dni:'3443',domicilio:'chiclayo'},
    {nombre:'miguel',dni:'12314343234',domicilio:'sjdl'},
  ]
  constructor() { }
  getCliente(){
    return this.clientes;
  }
}
