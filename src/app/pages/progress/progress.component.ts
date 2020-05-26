import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})

// * Revisar comentarios en HTML



export class ProgressComponent implements OnInit {

  // No es necesario definir el tipo en typescrip, sin embargo se deshabilita este error en archivo
  // tslint.json, luego se debe buscar el atributo 'no-inferrable-types' y se cambiar al valor false
  progreso: number = 50;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor) {


    this.progreso = this.progreso + valor;
    // this.progreso += valor;

    console.log('progreso antes: ', this.progreso);
    console.log('valor: ', valor);
    if ( this.progreso >= 100) {
      this.progreso = 100;
      console.log('progreso despues: ', this.progreso);
      return;
    }

    if ( this.progreso <= 0) {
      this.progreso = 0;
      console.log('progreso despues: ', this.progreso);
      return;
    }

  }

}
