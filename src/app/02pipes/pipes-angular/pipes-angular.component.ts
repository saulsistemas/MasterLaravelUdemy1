import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-angular',
  templateUrl: './pipes-angular.component.html',
  styleUrls: ['./pipes-angular.component.css']
})
export class PipesAngularComponent implements OnInit {

  texto="lima perú";
  constructor() { }

  ngOnInit(): void {
  }

}
