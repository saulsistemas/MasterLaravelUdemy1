import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../model/cliente.model';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes:Array<Cliente>;
  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getCliente();
  }
  

}
