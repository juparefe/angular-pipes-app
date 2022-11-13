import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //i18Select Pipe
  nombre: String = 'Patricia';
  genero: string = 'femenino';

  invitacionMapping = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18Plural Pipe
  clientes: string[] = ['Maria', 'Pedro','Carlos','Juan','Andres','Carla'];
  clientesMapping = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    if (this.nombre === 'Juan Pablo') {
      this.nombre = 'Patricia';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Juan Pablo';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Juan Pablo',
    edad: 28,
    direccion: 'Cali, Colombia'
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Spiderman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Flash',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(1000); // 0, 1, 2, ...
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3000);
  });
}
