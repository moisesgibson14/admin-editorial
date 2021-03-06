import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import Swal from 'sweetalert2'

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

  /**
   * Gets libros
   */
  getLibros(){
    this._librosService.getLibros().subscribe( response => {
      this.data = response
    }, error =>{console.log(error);
    })
  }

  /**
   * Eliminars lista libros component
   * @param id 
   */
  eliminar(id){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Se eliminará de tu lista",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {
        this._librosService.eliminar(id).subscribe( response => {
          Swal.fire(
            'Eliminado',
            'Se eliminó correctamente.',
            'success'
          )
          console.log(response);
          this.getLibros()
        })
      }
    })
  }
}
