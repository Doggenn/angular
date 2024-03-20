import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  @Input() inicio: number = 0;
  @Input() bgcolor: string='';
  numero: number = 1;
  contador: any;
  txtBtn: string = 'START';

  ngOnInit() {
    this.numero = this.inicio;
  }

  initContador(event:any) {
      if (event.target.textContent === 'START') {
      this.txtBtn = 'STOP'
      this.contador = setInterval(() => {
      this.numero++
    }, 1000);
    } else {
      this.txtBtn = 'START'
      clearInterval(this.contador)
      this.numero = this.inicio;
    }
  }
}
