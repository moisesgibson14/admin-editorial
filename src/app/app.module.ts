import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaAutorComponent } from './components/alta-autor/alta-autor.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { AltaLibroComponent } from './components/alta-libro/alta-libro.component';
import { LibrosService } from './services/libros.service';

@NgModule({
  declarations: [
    AppComponent,
    AltaAutorComponent,
    ListaLibrosComponent,
    AltaLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
