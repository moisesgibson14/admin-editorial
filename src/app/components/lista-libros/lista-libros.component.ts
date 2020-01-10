import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {
  data: any;
  constructor() { 
    this.data = [];
  }

  ngOnInit() {
    this.data = [
      { "nombre": "El señor de los anillos", "autor": "J.R.R. Tolkien"  , "editorial":"lorem" },
      { "nombre": "Cancion de hielo y fuego", "autor": "George RR Martin"  , "editorial":"lorem" },
      { "nombre": "Los Pilares de la Tierra", "autor": "Ken Follett" , "editorial":"lorem"  }
    ]
  }

}
