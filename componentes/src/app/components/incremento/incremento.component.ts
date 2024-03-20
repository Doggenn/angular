import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incremento',
  templateUrl: './incremento.component.html',
  styleUrls: ['./incremento.component.css']
})
export class IncrementoComponent {
  @Input() numero: number = 0;
  @Output() multiplo5: EventEmitter<number> = new EventEmitter();
  onClick(incremento: boolean) {
    if (incremento) {
      this.numero++
    } else {
      this.numero--
    }
    if(this.numero % 5 === 0) {
      this.multiplo5.emit(this.numero)
  }
  }
}
