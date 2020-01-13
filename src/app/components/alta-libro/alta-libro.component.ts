import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/services/libros.service';

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
  constructor(private route: ActivatedRoute, private _libroService: LibrosService) {
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
      }
    )
  }



}
