import { Component, Input } from '@angular/core';
import { Section } from '../interfaces/film.interface';
import { Film } from '../interfaces/film.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input() filmsGallery: Film[] = [];
  @Input() sectionFilms: Section[] = [];
}