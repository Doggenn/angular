import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onMultiplo5($event: number) {
  console.log('Numero multiplo de 5')
}

  title = 'componentes';
}
