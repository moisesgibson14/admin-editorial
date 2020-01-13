import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from 'src/app/services/libros.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-alta-libro',
  templateUrl: './alta-libro.component.html',
  styleUrls: ['./alta-libro.component.scss']
})
export class AltaLibroComponent implements OnInit {

  autor:any;
  idLibro:any;

  libro = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    autor: new FormControl(''),
    editorial: new FormControl(''),
    idioma: new FormControl(''),
    descripcion: new FormControl(''),
  });
  constructor(private route: ActivatedRoute, private _libroService: LibrosService, private router: Router) {
    this.idLibro = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
   this.getAutor()
    if(this.idLibro){
      this.getLibroId();
    }
  }

  /**
   * Gets libro id
   */
  getLibroId(){
    this._libroService.getLibroId(this.idLibro).subscribe(
      response  => {
        this.libro.setValue(response)
      }
    )
  }

  /**
   * Gets autor
   */
  getAutor(){
    this._libroService.getAutor().subscribe(
      response => {
        this.autor = response;
      }
    )
  }

  /**
   * Determines whether submit on
   */
  onSubmit(){
    this._libroService.addLibro(this.libro.value).subscribe(
      response => {
        if(response){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos guardados correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/lista'])
        }
      }
    )
  }

  updateLibro(){
    this._libroService.updateLibro(this.idLibro, this.libro.value).subscribe(response => { 
      if(response){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos actualizados correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/lista'])
      }
    })
  }


}
