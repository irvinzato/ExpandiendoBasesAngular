import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 12000
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    if( this.nuevo.nombre.trim().length === 0 ) { return; }
    console.log("hey los inputs tienen ", this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }

}
