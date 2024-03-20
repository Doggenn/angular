import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sectionFilm: any[] = [{section: "Comedia"}, {section: "Terror"}, {section: "Accion"}]
  terrorFilms: any[] = [
    {
        title: "Titulo1",
        image: "Imagen"
    },
    {
        title: "Titulo2",
        image: "Imagen"
    },
    {
        title: "Titulo3",
        image: "Imagen"
    },
  ];
  comedyFilms: any[] = [
    {
        title: "Titulo_1",
        image: "Imagen"
    },
    {
        title: "Titulo_2",
        image: "Imagen"
    },
    {
        title: "Titulo_3",
        image: "Imagen"
    },
  ];
  actionFilms: any[] = [
    {
        title: "Titulo-1",
        image: "Imagen"
    },
    {
        title: "Titulo-2",
        image: "Imagen"
    },
    {
        title: "Titulo-3",
        image: "Imagen"
    },
  ];
  title = 'netflix-app';
}
