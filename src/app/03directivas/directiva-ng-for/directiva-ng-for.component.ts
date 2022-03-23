import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores:Array<any> =[
    {nombre:"saul", ruc:'303003356'},
    {nombre:"claudio", ruc:'323231'},
    {nombre:"carlos", ruc:'123232'},
    {nombre:"miguel", ruc:'43431343'},
  ];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.proveedores.push({nombre:'carlitos',ruc:'25454556'})
    }, 3000);
  }

}
