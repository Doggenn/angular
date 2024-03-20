import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent {
  tamano: string = "";
  claveCss: string = '';
  valorCss: string = '';
  estilosParrafo: any = {};
  changeSize(event:any) {
    this.tamano = event.target.value
  }
  capturarValores() {
    console.log(this.valorCss, this.claveCss)
    this.estilosParrafo[this.claveCss]= this.valorCss
  }
}
