import { Component } from '@angular/core';

@Component({
  selector: 'app-menutabs',
  templateUrl: './menutabs.component.html',
  styleUrls: ['./menutabs.component.scss']
})
export class MenutabsComponent {
  seccionActual: string = 'london'
  cambiarSeccion( ciudad: string ) {
    this.seccionActual = ciudad;
  }
}
