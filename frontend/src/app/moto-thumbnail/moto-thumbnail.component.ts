import { Component, OnInit } from '@angular/core';
import { Moto } from '../moto';

@Component({
  selector: 'app-moto-thumbnail',
  templateUrl: './moto-thumbnail.component.html',
  styleUrls: ['./moto-thumbnail.component.css']
})
export class MotoThumbnailComponent implements OnInit {

  moto: Moto = {
    id: 1,
    nombre: "Ninja",
    modelo: "kwa",
    marca: "Kawasaki",
    anio: 2018,
    nueva: true,
  }

  constructor() { }

  ngOnInit() {
  }

}
