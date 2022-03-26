import { Component, OnInit } from '@angular/core';
import { ClientitosService } from '../../servicios/clientitos.service';

@Component({
  selector: 'app-listado-clientitos',
  templateUrl: './listado-clientitos.component.html',
  styleUrls: ['./listado-clientitos.component.css']
})
export class ListadoClientitosComponent implements OnInit {

  constructor(private clientesService:ClientitosService) { }
  clientitos :any;
  id_cliente:number = 2;
  usuario :any;
  ngOnInit(): void {
    
    this.cargarClientitos();
    this.cargarUnCliente();
    
    //console.log(this.clientesService.getClientes().subscribe());
    
    //this.clientesService.getClientes()
    //                    .subscribe((response:any)=>{
    //                      console.log(response);
    //                      
    //                    },(error:any)=>{
    //                      console.log(error);
    //                      
    //                    })
  }
  cargarClientitos(){
    this.clientesService.getAllUser().subscribe((result:any) =>{
      console.log(result.data);
      this.clientitos = result.data;
      
    },error =>{
      console.log(error);
      
    });
  }

  cargarUnCliente(){
    this.clientesService.getUser(this.id_cliente).subscribe((result:any) =>{
      console.log(result.data);
      this.usuario = result.data;
      
    },error =>{
      console.log(error);
      
    });
  }
}
