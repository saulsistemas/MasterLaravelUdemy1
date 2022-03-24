import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-clients',
  templateUrl: './crear-clients.component.html',
  styleUrls: ['./crear-clients.component.css']
})
export class CrearClientsComponent implements OnInit {

  form:FormGroup;

  
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre:new FormControl(''),
      ruc:new FormControl(''),
      direccion:new FormControl(''),
      localidad:new FormControl(''),
    })
  }

}
