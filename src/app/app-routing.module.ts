import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { AltaLibroComponent } from './components/alta-libro/alta-libro.component';
import { AltaAutorComponent } from './components/alta-autor/alta-autor.component';
import { ListaAutoresComponent } from './components/lista-autores/lista-autores.component';


const routes: Routes = [
  { path: 'lista', component: ListaLibrosComponent },
  { path: 'lista-autores', component: ListaAutoresComponent },
  { path: 'alta-libro', component: AltaLibroComponent },
  { path: 'alta-autor', component: AltaAutorComponent },
  { path: 'alta-libro/:id', component: AltaLibroComponent },
  { path: 'alta-autor/:id', component: AltaAutorComponent },
  { path: '',
  redirectTo: '/lista',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
