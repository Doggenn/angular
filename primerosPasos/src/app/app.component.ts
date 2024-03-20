import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Adrian";
  frase: string = "El resultado es:"
  estilos: string = "color:tomato";
  posicion: number = 0;
  ciudad: string = "Upgrade"
  color: string = "";
  texto: string = "";

  arrayImagenes: string[] = ['https://www.eloccidental.com.mx/incoming/gvhext-richard-burlton-htpmedsyzag-unsplash.jpg/ALTERNATES/LANDSCAPE_768/richard-burlton-HTpmedSyZag-unsplash.jpg', 'https://media.istockphoto.com/id/636475496/es/foto/retrato-de-cachorro-marr%C3%B3n-con-fondo-bokeh.jpg?s=612x612&w=0&k=20&c=xVLp2lHN7AhVyTMBXWTf1yfRyJovXT1R0hUwk98Riw8=', 'https://www.vetformacion.com/wp-content/uploads/2023/12/shutterstock_627891950.jpg'];
  sumar(n1: number, n2: number): string {
    let suma: number = n1 + n2;
    return `${this.frase} ${suma}`
  }

  restar(n1: number, n2: number): string {
    return `${this.frase} ${n1 - n2}`
  }

  calcular(operacion: string, n1: number, n2: number) {
    let resultado: string = "";
    switch (operacion) {
      case 'sumar':
        resultado = this.sumar(n1, n2)
        break;

      case 'restar':
        resultado = this.restar(n1, n2)
        break;
    }

  }

  clikeame(numero: number): void {
    this.posicion += numero;
    if (this.posicion === -1) {
      this.posicion = 2
    } else if (this.posicion === this.arrayImagenes.length) {
      this.posicion = 0;
    }


  }

  capturarCiudad(event:any) {
    this.ciudad = event.target.value
  }
  cambiarColor(color:string) {
    this.color = color;
  }

  caturarTexto(event: any) {
    this.texto = event.target.value;
  }
}
