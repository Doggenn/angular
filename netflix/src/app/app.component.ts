import { Component } from '@angular/core';
import { Film } from './interfaces/film.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  actionFilms: Film[] = [
    { title: 'Poor things', image: './assets/images/Accion/ejercitomuertos.jpg' },
    { title: 'Capitana Marvel', image: './assets/images/Accion/elprotector.webp' },
    { title: 'Star Wars: Episodio 1', image: './assets/images/Accion/johnwick2.webp' }
  ];
 
  terrorFilms: Film[] = [
    { title: 'Viernes 13', image: './assets/images/Terror/apostol.jpg' },
    { title: 'La Monja', image: './assets/images/Terror/calleterror.jpg' },
    { title: 'Black Phone', image: './assets/images/Terror/insidious2.webp' }]
  title = 'netflix';
}
