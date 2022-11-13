import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  nombre: string = 'jUan pabLo';
  fecha: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
