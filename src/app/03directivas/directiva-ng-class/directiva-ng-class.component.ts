import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-class',
  templateUrl: './directiva-ng-class.component.html',
  styleUrls: ['./directiva-ng-class.component.css']
})
export class DirectivaNgClassComponent implements OnInit {
  jugadores:Array<any> =[
    {nombre: 'Sauliño', equipo:'lakers'},
    {nombre: 'Claudiño', equipo:'celtics'},
    {nombre: 'Emilio', equipo:'bulls'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
