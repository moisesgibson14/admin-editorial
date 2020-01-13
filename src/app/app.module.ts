import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaAutorComponent } from './components/alta-autor/alta-autor.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { AltaLibroComponent } from './components/alta-libro/alta-libro.component';
import { LibrosService } from './services/libros.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { ListaAutoresComponent } from './components/lista-autores/lista-autores.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaAutorComponent,
    ListaLibrosComponent,
    AltaLibroComponent,
    FilterPipe,
    ListaAutoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
