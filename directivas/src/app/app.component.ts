import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arrayProductos: any[] = [
    {
      id: 1,
      title: 'Leche desnatada',
      price:4.5
    },
    {
      id: 2,
      title: 'Carne',
      price:14.5
    },
    {
      id: 3,
      title: 'Pan',
      price:0.5
    },
    {
      id: 4,
      title: 'Huevos',
      price:2.5
    },
    {
      id: 5,
      title: 'Cereales',
      price:1.5
    },
  ]
  title = 'directivas';
}
