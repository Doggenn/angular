import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent {
  london: boolean = true;
  paris: boolean = false;
  tokyo: boolean = false;
  mostrarL() {
    this.london = true;
    this.paris = false;
    this.tokyo = false;
  }
  mostrarP() {
    this.london = false;
    this.paris = true;
    this.tokyo = false;
  }
  mostrarT() {
    this.london = false;
    this.paris = false;
    this.tokyo = true;
  }
}
