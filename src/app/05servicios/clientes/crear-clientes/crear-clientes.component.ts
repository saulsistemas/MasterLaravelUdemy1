import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent implements OnInit {
  cliente:any={
    nombre:'',//ESTOS ESTAN EL TEXT DE FORMULARIO
    dni:'',
    domicilio:'',
  }
  constructor(private clienteService:ClientesService) { }

  ngOnInit(): void {
  }
  addCliente(){
    this.clienteService.setCliente(this.cliente)
    console.log(this.cliente);
    
  }

}
