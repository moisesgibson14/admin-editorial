import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-autor',
  templateUrl: './alta-autor.component.html',
  styleUrls: ['./alta-autor.component.scss']
})
export class AltaAutorComponent implements OnInit {

  autor = new FormGroup({
    nombre: new FormControl(''),
    nacionalidad: new FormControl(''),
    anio: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  ngSubmit(){
    console.log(this.autor.value);
    
  }

}
