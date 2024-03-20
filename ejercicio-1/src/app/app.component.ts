import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: string[] = ['Upgrade', 'Madrid', 'Lisboa']; 
  selectedCity: string = 'Upgrade';

  @Output() cityChanged: EventEmitter<string> = new EventEmitter<string>();

  onCityChange(event: any) {
    this.selectedCity = event.target.value;
    this.cityChanged.emit(this.selectedCity);
  }

  onCityChanged(city: string) {
    this.selectedCity = city;
    console.log('Ciudad seleccionada:', city);
  }
}
