import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  actor:any={
    nombre:'saul',
    apellido:'santamaria',
    fechaNacimiento:new Date(1994,5,18),
  }

  getEdad():number{
    const edad =(new Date().getTime()-this.actor.fechaNacimiento.getTime())/(365*24*60*60*1000);
    return Math.ceil(edad);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
