import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }
  @Input() personajesHijo: Personaje[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    if( this.nuevoPersonaje.nombre.trim().length === 0 ) { return; }
    console.log("hey los inputs tienen ", this.nuevoPersonaje);
    this.personajesHijo.push(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
    
  }

}
