import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {
  data: any;
  constructor(private _librosService : LibrosService) { 
    this.data = [];
  }

  ngOnInit() {
    this.getLibros()
  }

  getLibros(){
    this._librosService.getLibros().subscribe( response => {
      this.data = response
    }, error =>{console.log(error);
    })
  }
  eliminar(id){
    this._librosService.eliminar(id).subscribe( response => {
      console.log(response);
      this.getLibros()
    })
  }
}
