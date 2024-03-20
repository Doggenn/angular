import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent {
  status: boolean = false;
  mostrar() {
    this.status = !this.status;
  }
}
