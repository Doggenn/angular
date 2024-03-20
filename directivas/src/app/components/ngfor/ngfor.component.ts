import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
  @Input() misProductos: Producto[] = [];
}
