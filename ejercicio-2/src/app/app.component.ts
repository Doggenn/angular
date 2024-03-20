import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: string[] = ["red", "blue", "green"]
  box: string =`height: 300px;width: 300px;background-color: black;`;
  title = 'ejercicio-2';
  color(event:any) {
    console.log(event.target.innerHTML)
    if (event.target.innerHTML === "Rojo") {
      this.box =`width: 300px; height: 300px; background-color: tomato;`;
    }else if (event.target.innerHTML === "Azul") {
      this.box =`width: 300px; height: 300px; background-color: blue;`;
    } else if(event.target.innerHTML === "Verde"){
      this.box =`width: 300px; height: 300px; background-color: green;`;
    }

  }
}
