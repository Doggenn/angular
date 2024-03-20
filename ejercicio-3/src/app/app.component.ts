import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto:string = '';

  texto2(event:any) {
    console.log(event.target.value)
    this.texto = event.target.value;
}
  title = 'ejercicio-3';
}
