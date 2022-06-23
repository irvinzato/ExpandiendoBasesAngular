import { Component, OnInit } from '@angular/core';

import { DbzService } from './../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ) {
    // this.personajes = this.dbzService.personajes; Una forma de hacerlo pero puedo usar un "get()" para hacerlo mas interesante
   }

  ngOnInit(): void {
  }

  agregarNuevoPersonaje( event: Personaje ) {
    debugger; //Una opción para ir depurando el código
    this.personajes.push(event);
  }

}
