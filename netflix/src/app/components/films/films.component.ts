import { Component, Input } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input() myFilms: Film[] = [];
  @Input() titleSection: string = "";
  ngOnInit() {
    console.log()
  }
}
