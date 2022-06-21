import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:  `
        <h2>Bases de Angular</h2>
        <h3>La base es: <strong> {{ base }} </strong> </h3>

        <button (click)="numero = numero + base;"> + {{base}} </button>

        <span> {{ numero }} </span>

        <button (click)="numero = numero - base;"> - {{base}} </button>
    `
})
export class ContadorComponent {
    title: string = 'basesAngular';
    numero: number = 10;
    base: number = 8;
}