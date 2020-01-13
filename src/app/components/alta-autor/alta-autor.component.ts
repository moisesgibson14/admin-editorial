import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-alta-autor',
  templateUrl: './alta-autor.component.html',
  styleUrls: ['./alta-autor.component.scss']
})
export class AltaAutorComponent implements OnInit {

  autor = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    nacionalidad: new FormControl(''),
    anio: new FormControl('')
  });

  constructor(private _librosService: LibrosService) { }

  ngOnInit() {
  }

  ngSubmit(){
    this._librosService.addAutor(this.autor.value).subscribe(
      response => {
      }
    )
  }

}
