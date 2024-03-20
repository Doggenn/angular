import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { IncrementoComponent } from './components/incremento/incremento.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    IncrementoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
