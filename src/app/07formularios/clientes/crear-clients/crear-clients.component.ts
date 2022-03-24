import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-clients',
  templateUrl: './crear-clients.component.html',
  styleUrls: ['./crear-clients.component.css']
})
export class CrearClientsComponent implements OnInit {

  form:any;

  
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre:new FormControl('',[Validators.required]),
      ruc:new FormControl('',[Validators.required,Validators.maxLength(9)]),
      direccion:new FormControl('',[Validators.required]),
      localidad:new FormControl('',[Validators.required]),
    })
  }

}
