import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.scss']
})
export class ListaAutoresComponent implements OnInit {

  constructor(private _librosService : LibrosService) { }
  public data:any;
  ngOnInit() {
    this.data = [];
    this.getAutores()
  }

  getAutores(){
    this._librosService.getAutor().subscribe(response =>{
      console.log(response);
      this.data = response;
    })
  }

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
        this._librosService.eliminarAutor(id).subscribe(response => {
          console.log('se borro');
          Swal.fire(
            'Eliminado',
            'Se eliminó correctamente.',
            'success'
          )
          console.log(response);
          this.getAutores()
        })
      }
    })
  }

}
