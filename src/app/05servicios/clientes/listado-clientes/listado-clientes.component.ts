import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  constructor(private clientesService:ClientesService) { }

  clientes:any;
  ngOnInit(): void {
    console.log(this.clientesService.getCliente());
    this.clientes = this.clientesService.getCliente();
  }
  

}
