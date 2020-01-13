import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LibrosService } from 'src/app/services/libros.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-alta-autor',
  templateUrl: './alta-autor.component.html',
  styleUrls: ['./alta-autor.component.scss']
})
export class AltaAutorComponent implements OnInit {

  idAutor:any;
  autor = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    nacionalidad: new FormControl(''),
    anio: new FormControl('')
  });

  constructor(private _librosService: LibrosService, private route: ActivatedRoute,  private router: Router) { 
    this.idAutor = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    if(this.idAutor){
      this.getAutorId()
    }
  }

  getAutorId(){
    this._librosService.getAutorId(this.idAutor).subscribe(
      response =>{
        console.log(response);
        this.autor.setValue(response);
        
      }
    )
  }


  /**
   * submit
   */
  ngSubmit(){
    this._librosService.addAutor(this.autor.value).subscribe(
      response => {
        if(response){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos guardados correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/lista-autores'])
        }
      }
    )
  }

  updateAutor(){
    this._librosService.updateAutor(this.idAutor, this.autor.value).subscribe(response => {
      if(response){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos actualizados correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/lista-autores'])
      }
    })
  }

}
